/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useTransition, Suspense } from "react";
import Post from "./Post";
// import Comments from "./Comments";
import Author from "./Author";
import { Child } from "./Child";
import "./styles.css";

// useDeffered value is really great for handling state updates that are not immediate
// it is useful when we have a lot of state updates happening at the same time

// useTransition is a hook that allows us to start a state update with non immediate values
// it is useful when we have a lot of state updates happening at the same time but we don't want to block the main thread

function App() {
  const [tab, setTab] = useState("Post");

  // startTransition takes state setters and starts a state update with non immediate values
  // by using this we can avoid blocking the main thread
  // it is useful when we have a lot of state updates happening at the same time

  // const [isPending, startTransition] = useTransition();

  return (
    <Suspense fallback="Loading">
      <Button onClick={() => setTab("Post")}>View Post</Button>
      <Button onClick={() => setTab("Child")}>View Child</Button>
      <Button onClick={() => setTab("Author")}>View Author</Button>

      {/* {isPending ? <div>Loading...</div> : null} */}

      {tab === "Post" ? (
        <Post />
      ) : tab === "Child" ? (
        <Child cutoff={2} />
      ) : (
        <Author />
      )}
    </Suspense>
  );
}

function Button({ onClick, ...props }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      {...props}
    />
  );
}

export default App;
