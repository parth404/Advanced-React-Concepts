/* eslint-disable react/prop-types */
import { use } from "react";
import { ThemeContext } from "./App";

export function Child({ cutoff }) {
  const theme = use(ThemeContext);
  let items = [];

  if (theme === "dark") {
    items = use(getData(cutoff));
  }

  return (
    <>
      <div>{theme}</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cache = new Map();

function getData(cutoff) {
  const cachedValue = cache.get(cutoff);
  if (cachedValue != null) return cachedValue;

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ITEMS.filter((item) => item >= cutoff));
    }, 1000);
  });
  cache.set(cutoff, promise);
  return promise;
}
