# azure-terraformer

~~~~~ sh
npm install e53e04ac/azure-terraformer
~~~~~

~~~~~ mjs
import { AzureTerraformer } from 'e53e04ac/azure-terraformer';
import { azureTerraformer } from 'e53e04ac/azure-terraformer';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
    B_2(["e53e04ac/string-template"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/19614365368936f6974a633d25a1109a3465a99d";
  click B_1 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_2 "https://github.com/e53e04ac/string-template/tree/5d406da4e10981a4fad93981115baed7a8fcae57";
  click B_3 "https://www.npmjs.com/package/@types/node/v/18.14.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/19444d5321ee7ab4d8885be24d501a55ddf04259";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/azure-terraformer";
    E_0(["AzureTerraformer"]);
    E_1(["azureTerraformer"]);
  end;
  M(["index.mjs"])
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/azure-terraformer";
    E_0(["namespace AzureTerraformer"]);
    E_1(["type AzureTerraformer"]);
    E_2(["const AzureTerraformer"]);
    E_3(["const azureTerraformer"]);
  end;
  M(["index.d.ts"])
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
