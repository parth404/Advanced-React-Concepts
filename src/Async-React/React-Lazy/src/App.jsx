import { Suspense, useState, lazy } from "react";
// import NewComment from "./NewComment";
// import Comments from "./Comments";

const Comments = lazy(() => wait(5000).then(() => import("./Comments")));
const NewComment = lazy(() => wait(1000).then(() => import("./NewComment")));

function App() {
  const [viewComments, setViewComments] = useState(false);
  const isLoggedIn = true;

  return (
    <>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        mauris. Illum voluptatum, quae possimus. Quae quidem vel ad beatae aut
        quia. Quisquam quia, voluptatem. Quisquam quia, voluptatem. Quisquam
      </article>
      {viewComments ? (
        <>
          {/* Nested Suspense is used to load comments only after new comment is loaded */}
          <Suspense fallback="Loading">
            {isLoggedIn && <NewComment />}

            <Suspense fallback="Loading">
              <Comments />
            </Suspense>
          </Suspense>
        </>
      ) : (
        <button onClick={() => setViewComments(true)}>View Comments</button>
      )}
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
