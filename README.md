# azure-terraformer

~~~~~ sh
npm install e53e04ac/azure-terraformer
~~~~~

~~~~~ mjs
import { AzureTerraformer } from 'azure-terraformer';
import { azureTerraformer } from 'azure-terraformer';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
    B_2(["string-template"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\nfe89a990ada06652bfffee75818dff0445762cd1"]);
    C_1(["e53e04ac/hold\n8575e49e6bfe80ba61782e3a8f9eb80f78776713"]);
    C_2(["e53e04ac/string-template\n6012b43b43d7767cdb341bcf32abd532bbf31ea1"]);
    C_4(["e53e04ac/file-entry\n5562ecc181baea1a9b666fd9490bfabd2c155d30"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.5"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/fe89a990ada06652bfffee75818dff0445762cd1";
  click C_1 "https://github.com/e53e04ac/hold/tree/8575e49e6bfe80ba61782e3a8f9eb80f78776713";
  click C_2 "https://github.com/e53e04ac/string-template/tree/6012b43b43d7767cdb341bcf32abd532bbf31ea1";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.5";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/5562ecc181baea1a9b666fd9490bfabd2c155d30";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/azure-terraformer";
    E_0(["namespace AzureTerraformer"]);
    E_1(["type AzureTerraformer"]);
    E_2(["const AzureTerraformer"]);
    E_3(["const azureTerraformer"]);
  end;
  M["index.d.ts"]
  subgraph "event-emitter";
    I_0_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/azure-terraformer";
    E_0(["AzureTerraformer"]);
    E_1(["azureTerraformer"]);
  end;
  M["index.mjs"]
  subgraph "node:child_process";
    I_0_0(["spawn"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
  end;
  subgraph "string-template";
    I_3_0(["StringTemplate"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
