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
  A(["e53e04ac/azure-terraformer"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
    B_2(["e53e04ac/string-template"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["e53e04ac/file-entry"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_1 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_2 "https://github.com/e53e04ac/string-template/tree/1401fa1f193bbf78afe239bf4c9e99765f72a1c3";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/azure-terraformer"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:child_process"
    D0(["spawn"]);
  end;
  subgraph "event-emitter"
    D1(["EventEmitter"]);
  end;
  subgraph "hold"
    D2(["hold"]);
    D5(["Get"]);
  end;
  subgraph "string-template"
    D3(["StringTemplate"]);
  end;
  subgraph "file-entry"
    D4(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D1 --import--> C1;
  D4 --import--> C1;
  D5 --import--> C1;
~~~~~
