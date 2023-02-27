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
    C_0(["e53e04ac/event-emitter\n7e816a82855aca428d7cfe3b3600f54c0fef6c0c"]);
    C_1(["e53e04ac/hold\n511bb6663491dadc6e2760a04ee3750996d069f8"]);
    C_2(["e53e04ac/string-template\n7078dff1996351a80ee6a966ce0a5921e3190d5c"]);
    C_4(["e53e04ac/file-entry\nf47bb48601e4e7066cd1d17d5a5c035688cfc251"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.2"]);
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
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/7e816a82855aca428d7cfe3b3600f54c0fef6c0c";
  click C_1 "https://github.com/e53e04ac/hold/tree/511bb6663491dadc6e2760a04ee3750996d069f8";
  click C_2 "https://github.com/e53e04ac/string-template/tree/7078dff1996351a80ee6a966ce0a5921e3190d5c";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.2";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/f47bb48601e4e7066cd1d17d5a5c035688cfc251";
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
