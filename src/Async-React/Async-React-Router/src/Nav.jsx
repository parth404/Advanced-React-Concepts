import { Outlet, useNavigation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

export function Nav() {
  const { state } = useNavigation();

  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/store">Store</Link>
      <br />
      <Link to="/team">Team</Link>
      <br />
      {state === "loading" && <div>Loading...</div>}
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
}
