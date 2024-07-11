import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

// const appElement = document.getElementById("app") as HTMLElement;

if(!appElement){
    throw new Error("Could not find app element");
}

// How do I ensure that appElement is defined?

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
