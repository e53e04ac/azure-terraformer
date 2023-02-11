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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_1 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_2 "https://github.com/e53e04ac/string-template/tree/680192ba42cf15272e880b59cae97b1d4bb6fe70";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:child_process";
    B_0_0(["spawn"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_2_0(["hold"]);
  end;
  subgraph "string-template";
    B_3_0(["StringTemplate"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "event-emitter";
    B_0_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    B_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
~~~~~
