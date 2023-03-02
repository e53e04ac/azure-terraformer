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
    C_0(["e53e04ac/event-emitter\n9ac7c25f35b38e0c7d2823ed147a773578ee9a58"]);
    C_1(["e53e04ac/hold\n418996396af94d436211958d5e6cc4acb5aa089d"]);
    C_2(["e53e04ac/string-template\nbe6af6a8292d2fce4077cc808526d967fa8acc47"]);
    C_4(["e53e04ac/file-entry\n604b8be6e60c2a0116ba5bc26939a17584bbcd14"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.4"]);
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
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/9ac7c25f35b38e0c7d2823ed147a773578ee9a58";
  click C_1 "https://github.com/e53e04ac/hold/tree/418996396af94d436211958d5e6cc4acb5aa089d";
  click C_2 "https://github.com/e53e04ac/string-template/tree/be6af6a8292d2fce4077cc808526d967fa8acc47";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.4";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/604b8be6e60c2a0116ba5bc26939a17584bbcd14";
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
