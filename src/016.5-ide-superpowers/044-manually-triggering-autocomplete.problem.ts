type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  foo: "heyy",
  bar: 0,
  baz: false
});

document.addEventListener(
  // Autocomplete this string!
  "progress",
  (event) => {
    console.log(event);
  },
);
