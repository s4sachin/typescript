// Try uncommenting this!
import "@total-typescript/ts-reset";

const users = ["matt", "sofia", "waqas"] as const;

const nameIncludes = users.includes("bryan");
console.log(nameIncludes);

users.indexOf("bryan");
