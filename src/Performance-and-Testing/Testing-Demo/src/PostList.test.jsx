import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PostList } from "./PostList";
import { mockServer } from "../test-setup/mockServer";
import { http } from "msw";

describe("PostList component", () => {
  it("should get a list of posts", async () => {
    mockServer.use(
      http.get("https://example.com/api/posts", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, title: "post 1" },
            { id: 2, title: "post 2" },
          ])
        );
      })
    );

    render(<PostList />);

    waitFor(expect(screen.getByText("post 1")).toBeInTheDocument());
    expect(screen.getByText("post 2")).toBeInTheDocument();
  });
});
