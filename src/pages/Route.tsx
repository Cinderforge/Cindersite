import type { RouteObject } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { default as ProjectRoute } from "@/pages/projects/Route";

const Route: RouteObject[] = [
    { index: true, element: <Home /> },
    ProjectRoute,
    { path: "/*", element: <NotFound /> },
];

export default Route;