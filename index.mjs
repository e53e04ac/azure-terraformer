/*!
    @e53e04ac/azure-terraformer/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { spawn as childProcessSpawn } from 'node:child_process';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { StringTemplate } from 'string-template';

/** @type {import('.').AzureTerraformer.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('.').AzureTerraformer._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        spawnStdioInherit: (async (params) => {
            console.log(new Date(), params.command, ...params.args);
            return new Promise((resolve) => {
                childProcessSpawn(params.command, params.args, {
                    cwd: params.cwd,
                    stdio: 'inherit',
                }).on('close', (code, signal) => {
                    const stdout = Buffer.from([]);
                    const stderr = Buffer.from([]);
                    resolve({ code, signal, stdout, stderr });
                });
            });
        }),
        spawnStdioPipe: (async (params) => {
            console.log(new Date(), params.command, ...params.args);
            return new Promise((resolve) => {
                const it = childProcessSpawn(params.command, params.args, {
                    cwd: params.cwd,
                    stdio: 'pipe',
                });
                Promise.all([
                    /** @type {Promise<{ stdout: Buffer; }>} */
                    (new Promise((resolve) => {
                        /** @type {Buffer[]} */
                        const chunks = [];
                        it.stdout.on('data', (chunk) => {
                            chunks.push(chunk);
                        });
                        it.stdout.on('end', () => {
                            resolve({ stdout: Buffer.concat(chunks) });
                        });
                    })),
                    /** @type {Promise<{ stderr: Buffer; }>} */
                    (new Promise((resolve) => {
                        /** @type {Buffer[]} */
                        const chunks = [];
                        it.stderr.on('data', (chunk) => {
                            chunks.push(chunk);
                        });
                        it.stderr.on('end', () => {
                            resolve({ stderr: Buffer.concat(chunks) });
                        });
                    })),
                    /** @type {Promise<{ code: null | number; signal: null | NodeJS.Signals; }>} */
                    (new Promise((resolve) => {
                        it.on('close', (code, signal) => {
                            resolve({ code, signal });
                        });
                    })),
                ]).then(([{ stdout }, { stderr }, { code, signal }]) => {
                    resolve({ code, signal, stdout, stderr });
                });
            });
        }),
        spawn: (async (params) => {
            if (params.stdio == 'inherit') {
                return await _self.spawnStdioInherit(params);
            }
            if (params.stdio == 'pipe') {
                return await _self.spawnStdioPipe(params);
            }
            throw new Error();
        }),
        booleanSwitch: ((name, value) => {
            return (value !== true ? [] : [name]);
        }),
        boolean: ((name, value) => {
            return (value === undefined ? [] : [name, (value ? 'true' : 'false')]);
        }),
        number: ((name, value) => {
            return (value === undefined ? [] : [name, `${value}`]);
        }),
        string: ((name, value) => {
            return (value === undefined ? [] : [name, value]);
        }),
        json: ((name, value) => {
            return (value === undefined ? [] : [name, JSON.stringify(value)]);
        }),
    });

    /** @type {import('.').AzureTerraformer.Self} */
    const self = ({
        ...EventEmitter({}),
        _AzureTerraformer: (() => {
            return _self;
        }),
        azGroupCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'group', 'create',
                    '--subscription', params.subscription,
                    '--name', params.name,
                    '--location', params.location,
                ],
            });
        }),
        azRoleAssignmentCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'role', 'assignment', 'create',
                    '--subscription', params.subscription,
                    '--assignee', params.assignee,
                    '--scope', params.scope,
                    '--role', params.role,
                ],
            });
        }),
        azKeyvaultCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'keyvault', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--location', params.location,
                    ..._self.string('--sku', params.sku),
                ],
            });
        }),
        azKeyvaultUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'keyvault', 'update',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.string('--public-network-access', params.publicNetworkAccess),
                    ..._self.number('--retention-days', params.retentionDays),
                ],
            });
        }),
        azKeyvaultShow: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'keyvault', 'show',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            }).then((result) => {
                if (result.code == 0) {
                    return JSON.parse(result.stdout.toString());
                }
                throw new Error(`code: ${result.code}`);
            });
        }),
        azKeyvaultSetPolicy: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'keyvault', 'set-policy',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--object-id', params.objectId,
                    '--secret-permissions', params.secretPermissions,
                ],
            });
        }),
        azStorageAccountCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'storage', 'account', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--location', params.location,
                    ..._self.string('--sku', params.sku),
                ],
            });
        }),
        azStorageAccountUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'storage', 'account', 'update',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.boolean('--allow-blob-public-access', params.allowBlobPublicAccess),
                    ..._self.boolean('--allow-cross-tenant-replication', params.allowCrossTenantReplication),
                    ..._self.boolean('--enable-sftp', params.enableSftp),
                    ..._self.boolean('--https-only', params.httpsOnly),
                    ..._self.string('--min-tls-version', params.minTlsVersion),
                    ..._self.string('--public-network-access', params.publicNetworkAccess),
                    ..._self.string('--routing-choice', params.routingChoice),
                ],
            });
        }),
        azStorageAccountFileServicePropertiesUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'storage', 'account', 'file-service-properties', 'update',
                    '--subscription', params.subscription,
                    '--account-name', params.accountName,
                    ..._self.boolean('--enable-delete-retention', params.enableDeleteRetention),
                ],
            });
        }),
        azStorageAccountShow: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'storage', 'account', 'show',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            }).then((result) => {
                if (result.code == 0) {
                    return JSON.parse(result.stdout.toString());
                }
                throw new Error(`code: ${result.code}`);
            });
        }),
        azStorageAccountKeysList: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'storage', 'account', 'keys', 'list',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--account-name', params.accountName,
                ],
            }).then((result) => {
                if (result.code == 0) {
                    return JSON.parse(result.stdout.toString());
                }
                throw new Error(`code: ${result.code}`);
            });
        }),
        azStorageShareCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'storage', 'share', 'create',
                    '--subscription', params.subscription,
                    '--account-name', params.accountName,
                    '--name', params.name,
                ],
            });
        }),
        azStorageShareUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'storage', 'share', 'update',
                    '--subscription', params.subscription,
                    '--account-name', params.accountName,
                    '--name', params.name,
                    ..._self.number('--quota', params.quota),
                ],
            });
        }),
        azStorageTableCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'storage', 'table', 'create',
                    '--subscription', params.subscription,
                    '--account-name', params.accountName,
                    '--name', params.name,
                ],
            });
        }),
        azAcrCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'acr', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--location', params.location,
                    ..._self.string('--sku', params.sku),
                ],
            });
        }),
        azAcrUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'acr', 'update',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.boolean('--admin-enabled', params.adminEnabled),
                ],
            });
        }),
        azAcrShow: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'acr', 'show',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            }).then((result) => {
                if (result.code == 0) {
                    return JSON.parse(result.stdout.toString());
                }
                throw new Error(`code: ${result.code}`);
            });
        }),
        azAppservicePlanCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'appservice', 'plan', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--location', params.location,
                    ..._self.string('--sku', params.sku),
                    ..._self.booleanSwitch('--is-linux', params.isLinux),
                ],
            });
        }),
        azAppservicePlanUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'appservice', 'plan', 'update',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.number('--number-of-workers', params.numberOfWorkers),
                ],
            });
        }),
        azWebappCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--plan', params.plan,
                    '--deployment-container-image-name', params.deploymentContainerImageName,
                ],
            });
        }),
        azWebappUpdate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'update',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.boolean('--client-affinity-enabled', params.clientAffinityEnabled),
                    ..._self.boolean('--https-only', params.httpsOnly),
                ],
            });
        }),
        azWebappConfigSet: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'config', 'set',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    ..._self.boolean('--always-on', params.alwaysOn),
                    ..._self.string('--ftps-state', params.ftpsState),
                    ..._self.boolean('--http20-enabled', params.http20Enabled),
                    ..._self.string('--min-tls-version', params.minTlsVersion),
                    ..._self.number('--number-of-workers', params.numberOfWorkers),
                    ..._self.boolean('--remote-debugging-enabled', params.remoteDebuggingEnabled),
                    ..._self.boolean('--use-32bit-worker-process', params.use32bitWorkerProcess),
                    ..._self.boolean('--web-sockets-enabled', params.webSocketsEnabled),
                    ..._self.json('--generic-configurations', params.genericConfiguration),
                ],
            });
        }),
        azWebappConfigStorageAccountAdd: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'config', 'storage-account', 'add',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--custom-id', params.customId,
                    '--mount-path', params.mountPath,
                    '--storage-type', params.storageType,
                    '--account-name', params.accountName,
                    '--share-name', params.shareName,
                    '--access-key', params.accessKey,
                ],
            });
        }),
        azWebappIdentityAssign: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'identity', 'assign',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            });
        }),
        azWebappIdentityShow: (async (params) => {
            return await _self.spawn({
                stdio: 'pipe',
                command: params.az,
                args: [
                    'webapp', 'identity', 'show',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            }).then((result) => {
                if (result.code == 0) {
                    return JSON.parse(result.stdout.toString());
                }
                throw new Error(`code: ${result.code}`);
            });
        }),
        azLogicWorkflowCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'logic', 'workflow', 'create',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--plan', params.plan,
                    '--definition', params.definition,
                ],
            });
        }),
        createFileFromTemplate: (async (params) => {
            await params.template.transformString(params.destination, async (string) => {
                return await StringTemplate({
                    template: string,
                    variables: Object.entries(params.map).map(([name, value]) => {
                        return { name, value };
                    }),
                }).build();
            });
        }),
        createJsonFileFromMap: (async (params) => {
            await params.destination.writeJson(
                Object.entries(params.map).map(([name, value]) => {
                    return { name, value };
                }),
                {
                    replacer: params.replacer,
                    space: params.space,
                    encoding: params.encoding,
                }
            );
        }),
        azAcrLogin: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'acr', 'login',
                    '--subscription', params.subscription,
                    '--name', params.name,
                ],
            });
        }),
        azWebappConfigAppsettingsSet: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'config', 'appsettings', 'set',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                    '--settings', `@${params.settings.path()}`,
                ],
            });
        }),
        azWebappRestart: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.az,
                args: [
                    'webapp', 'restart',
                    '--subscription', params.subscription,
                    '--resource-group', params.resourceGroup,
                    '--name', params.name,
                ],
            });
        }),
        dockerImageBuild: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.docker,
                args: [
                    'image', 'build',
                    ..._self.booleanSwitch('--no-cache', params.noCache),
                    ..._self.string('--network', params.network),
                    '--tag', params.tag,
                    '.',
                ],
                cwd: params.context.path(),
            });
        }),
        dockerImageTag: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.docker,
                args: [
                    'image', 'tag',
                    params.sourceImage,
                    params.targetImage,
                ],
            });
        }),
        dockerImagePush: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.docker,
                args: [
                    'image', 'push',
                    params.name,
                ],
            });
        }),
        node: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.node,
                args: [
                    params.script,
                    ...params.args,
                ],
                cwd: params.cwd,
            });
        }),
        tarCreate: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.tar,
                args: [
                    '--create',
                    '--file', params.file,
                    '--verbose',
                    '--xz',
                    ...params.excludes.flatMap((exclude) => {
                        return ['--exclude', exclude];
                    }),
                    '--directory', params.directory,
                    '.',
                ],
            });
        }),
        tarExtract: (async (params) => {
            return await _self.spawn({
                stdio: 'inherit',
                command: params.tar,
                args: [
                    '--extract',
                    '--file', params.file,
                    '--verbose',
                    '--directory', params.directory,
                ],
            });
        }),
    });

    return self;

});

/** @type {import('.').AzureTerraformer.Companion} */
const companion = ({});

/** @type {import('.').AzureTerraformer.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

const sharedInstance = hold(() => {
    return constructor({});
});

export { constructorWithCompanion as AzureTerraformer };

export { sharedInstance as azureTerraformer };
