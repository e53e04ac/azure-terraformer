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
    B_1(["e53e04ac/file-entry"]);
    B_2(["e53e04ac/hold"]);
    B_3(["e53e04ac/string-template"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_1 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_2 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_3 "https://github.com/e53e04ac/string-template/tree/ee8b12ef8b3391447cbea76d8df5d5d71ea4c396";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
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
