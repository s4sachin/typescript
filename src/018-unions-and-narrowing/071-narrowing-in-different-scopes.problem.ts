import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[],
) => {
  // In nested Scopes TS cannot infer the type and hence in if() we have to confirm the type 

  // Solution 1
  // if (searchParams.name) {
  //   return users.filter((user) => {
  //     if (searchParams.name) return user.name.includes(searchParams.name)
  //   }
  // );
  // }

  // Solution 2
  // USing const now TS knows that it's value will never change
  const searchName = searchParams.name;
  if (searchName) {
    return users.filter((user) => {
      return user.name.includes(searchName)
    }
  );
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ],
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
