import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./views/Home";
import Login from "./views/Login";
import CreatePost from "./views/CreatePost";
import BlogPost from "./views/BlogPost";
import NotFound from "./views/NotFound";
import {
  fetchUserData,
  requireAuth,
  requireNotAuth,
} from "./loader/auth.loader";
import FullLoading from "../components/common/FullLoading";
import { fetchPostDetail, fetchPosts } from "./loader/post.loader";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: fetchUserData,
    HydrateFallback: FullLoading,
    children: [
      {
        path: "/",
        Component: Home,
        loader: fetchPosts,
      },
      {
        path: "/login",
        loader: requireNotAuth,
        Component: Login,
      },
      {
        path: "/create-post",
        loader: requireAuth,
        Component: CreatePost,
      },
      {
        path: "/post/:id",
        Component: BlogPost,
        loader: fetchPostDetail,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
