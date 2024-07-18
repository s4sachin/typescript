import { Extends, Expect } from "@total-typescript/helpers";

type BasicDetails = {
  id: string;
  createdAt: Date;
}

type User =  {
  name: string;
  email: string;
} & BasicDetails;

type Product = {
  name: string;
  price: number;
} & BasicDetails;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
