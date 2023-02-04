/*!
    @e53e04ac/azure-terraformer/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';

export declare namespace AzureTerraformer {

    type EventSpecs = Record<never, never>;

    type Options = Record<never, never>;

    type SpawnResult = {
        readonly code: null | number;
        readonly signal: null | NodeJS.Signals;
        readonly stdout: Buffer;
        readonly stderr: Buffer;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly spawnStdioInherit: {
            (params: {
                readonly command: string;
                readonly args: string[];
                readonly cwd?: string;
            }): Promise<SpawnResult>;
        };
        readonly spawnStdioPipe: {
            (params: {
                readonly command: string;
                readonly args: string[];
                readonly cwd?: string;
            }): Promise<SpawnResult>;
        };
        readonly spawn: {
            (params: {
                readonly stdio: 'inherit' | 'pipe';
                readonly command: string;
                readonly args: string[];
                readonly cwd?: string;
            }): Promise<SpawnResult>;
        };
        readonly booleanSwitch: {
            (name: string, value: undefined | boolean): string[];
        };
        readonly boolean: {
            (name: string, value: undefined | boolean): string[];
        };
        readonly number: {
            (name: string, value: undefined | number): string[];
        };
        readonly string: {
            (name: string, value: undefined | string): string[];
        };
        readonly json: {
            (name: string, value: undefined | Record<string, unknown>): string[];
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _AzureTerraformer: Get<_Self>;
        readonly azGroupCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly name: string;
                readonly location: string;
            }): Promise<SpawnResult>;
        };
        readonly azRoleAssignmentCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly assignee: string;
                readonly scope: string;
                readonly role: string;
            }): ReturnType<_Self['spawn']>;
        };
        readonly azKeyvaultCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly location: string;
                readonly sku: 'standard';
            }): Promise<SpawnResult>;
        };
        readonly azKeyvaultUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly publicNetworkAccess: 'Enabled';
                readonly retentionDays: number;
            }): Promise<SpawnResult>;
        };
        readonly azKeyvaultShow: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): Promise<{
                readonly id: string;
            } & Record<string, unknown>>;
        };
        readonly azKeyvaultSetPolicy: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly objectId: string;
                readonly secretPermissions: string;
            }): Promise<SpawnResult>;
        };
        readonly azStorageAccountCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly location: string;
                readonly sku: 'Standard_LRS';
            }): Promise<SpawnResult>;
        };
        readonly azStorageAccountUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly allowBlobPublicAccess: true;
                readonly allowCrossTenantReplication: false;
                readonly enableSftp: false;
                readonly httpsOnly: true;
                readonly minTlsVersion: 'TLS1_2';
                readonly publicNetworkAccess: 'Enabled';
                readonly routingChoice: 'MicrosoftRouting';
            }): Promise<SpawnResult>;
        };
        readonly azStorageAccountFileServicePropertiesUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly accountName: string;
                readonly enableDeleteRetention: boolean;
            }): Promise<SpawnResult>;
        };
        readonly azStorageAccountShow: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): Promise<{
                readonly id: string;
            } & Record<string, unknown>>;
        };
        readonly azStorageAccountKeysList: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly accountName: string;
            }): Promise<{
                readonly creationTime: string;
                readonly keyName: string;
                readonly permissions: string;
                readonly value: string;
            }[]>;
        };
        readonly azStorageShareCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly accountName: string;
                readonly name: string;
            }): Promise<SpawnResult>;
        };
        readonly azStorageShareUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly accountName: string;
                readonly name: string;
                readonly quota: number;
            }): Promise<SpawnResult>;
        };
        readonly azStorageTableCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly accountName: string;
                readonly name: string;
            }): Promise<SpawnResult>;
        };
        readonly azAcrCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly location: string;
                readonly sku: 'Basic';
            }): Promise<SpawnResult>;
        };
        readonly azAcrUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly adminEnabled: false;
            }): Promise<SpawnResult>;
        };
        readonly azAcrShow: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): Promise<{
                readonly id: string;
            } & Record<string, unknown>>;
        };
        readonly azAppservicePlanCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly location: string;
                readonly sku: 'B1';
                readonly isLinux: true;
            }): Promise<SpawnResult>;
        };
        readonly azAppservicePlanUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly numberOfWorkers: 1;
            }): Promise<SpawnResult>;
        };
        readonly azWebappCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly plan: string;
                readonly deploymentContainerImageName: string;
            }): Promise<SpawnResult>;
        };
        readonly azWebappUpdate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly clientAffinityEnabled: false;
                readonly httpsOnly: true;
            }): Promise<SpawnResult>;
        };
        readonly azWebappConfigSet: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly alwaysOn?: boolean;
                readonly ftpsState?: 'Disabled';
                readonly http20Enabled?: true;
                readonly minTlsVersion?: '1.2';
                readonly numberOfWorkers?: 1;
                readonly remoteDebuggingEnabled?: false;
                readonly use32bitWorkerProcess?: false;
                readonly webSocketsEnabled?: boolean;
                readonly genericConfiguration?: {
                    readonly acrUseManagedIdentityCreds?: boolean;
                };
            }): Promise<SpawnResult>;
        };
        readonly azWebappConfigStorageAccountAdd: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly customId: string;
                readonly mountPath: string;
                readonly storageType: 'AzureBlob' | 'AzureFiles';
                readonly accountName: string;
                readonly shareName: string;
                readonly accessKey: string;
            }): Promise<SpawnResult>;
        };
        readonly azWebappIdentityAssign: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): ReturnType<_Self['spawn']>;
        };
        readonly azWebappIdentityShow: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): Promise<{
                readonly principalId: string;
                readonly tenantId: string;
                readonly type: string;
                readonly userAssignedIdentities: unknown;
            } & Record<string, unknown>>;
        };
        readonly azLogicWorkflowCreate: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly plan: string;
                readonly definition: string;
            }): Promise<SpawnResult>;
        };
        readonly createFileFromTemplate: {
            <T extends Record<string, string>>(params: {
                readonly template: FileEntry;
                readonly destination: FileEntry;
                readonly map: T;
            }): Promise<void>;
        };
        readonly createJsonFileFromMap: {
            <T extends Record<string, number | string>>(params: {
                readonly destination: FileEntry;
                readonly map: T;
            }): Promise<void>;
        };
        readonly azAcrLogin: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly name: string;
            }): Promise<SpawnResult>;
        };
        readonly azWebappConfigAppsettingsSet: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
                readonly settings: FileEntry;
            }): Promise<SpawnResult>;
        };
        readonly azWebappRestart: {
            (params: {
                readonly az: string;
                readonly subscription: string;
                readonly resourceGroup: string;
                readonly name: string;
            }): Promise<SpawnResult>;
        };
        readonly dockerImageBuild: {
            (params: {
                readonly docker: string;
                readonly noCache?: undefined | boolean;
                readonly network?: undefined | 'host';
                readonly tag: string;
                readonly context: FileEntry;
            }): Promise<SpawnResult>;
        };
        readonly dockerImageTag: {
            (params: {
                readonly docker: string;
                readonly sourceImage: string;
                readonly targetImage: string;
            }): Promise<SpawnResult>;
        };
        readonly dockerImagePush: {
            (params: {
                readonly docker: string;
                readonly name: string;
            }): Promise<SpawnResult>;
        };
        readonly node: {
            (params: {
                readonly node: string;
                readonly script: string;
                readonly args: string[];
                readonly cwd: string;
            }): Promise<SpawnResult>;
        };
        readonly tarCreate: {
            (params: {
                readonly tar: string;
                readonly file: string;
                readonly directory: string;
                readonly excludes: string[];
            }): Promise<SpawnResult>;
        };
        readonly tarExtract: {
            (params: {
                readonly tar: string;
                readonly file: string;
                readonly directory: string;
            }): Promise<SpawnResult>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type AzureTerraformer = AzureTerraformer.Self;

export declare const AzureTerraformer: AzureTerraformer.ConstructorWithCompanion;

export declare const azureTerraformer: Get<AzureTerraformer>;
