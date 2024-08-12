import { useLoaderData, Await, useAsyncValue } from "react-router";
import { wait } from "./wait";
import { Suspense } from "react";

function Store() {
  const { productCountPromise, categoryPromise } = useLoaderData();
  return (
    <div>
      <h1>Store</h1>
      <strong>Product Count: </strong>{" "}
      <Suspense fallback="Loading">
        <Await resolve={productCountPromise}>
          {(count) => <span>{count}</span>}
        </Await>
      </Suspense>
      <br />
      <strong>Category: </strong>{" "}
      <Suspense fallback="Loading">
        <Await resolve={categoryPromise}>{<Category />}</Await>
      </Suspense>
    </div>
  );
}

function Category() {
  const category = useAsyncValue();
  return <span>{category}</span>;
}

async function loader() {
  const productCountPromise = wait(4, 1000);
  const categoryPromise = wait("Sports", 2000);

  return {
    productCountPromise,
    categoryPromise,
  };
}

export const storeRoute = { element: <Store />, loader };
