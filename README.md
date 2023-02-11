# azure-terraformer

~~~~~ sh
npm install e53e04ac/azure-terraformer
~~~~~

~~~~~ mjs
import { AzureTerraformer } from 'e53e04ac/azure-terraformer';
import { azureTerraformer } from 'e53e04ac/azure-terraformer';
~~~~~

~~~~~ mermaid
graph LR;
  A(["azure-terraformer"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["e53e04ac/file-entry"]);
  B2(["e53e04ac/hold"]);
  B3(["e53e04ac/string-template"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B1 href "https://github.com/e53e04ac/file-entry";
  click B2 href "https://github.com/e53e04ac/hold";
  click B3 href "https://github.com/e53e04ac/string-template";
  subgraph "e53e04ac/azure-terraformer";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
