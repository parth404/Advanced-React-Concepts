import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";

export default function Home() {
  const { dataPromise } = useLoaderData();
  return (
    <div>
      <h1>
        Home -{" "}
        <Suspense fallback="Loading">
          <Await resolve={dataPromise}>{(data) => <span>{data}</span>}</Await>
        </Suspense>
      </h1>
    </div>
  );
}
