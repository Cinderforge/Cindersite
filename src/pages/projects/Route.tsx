import { type RouteObject } from "react-router-dom";

import { default as ProjectHome } from "@/pages/projects/Home";

const Route: RouteObject = {
    path: "projects",
    element: <ProjectHome />,
};

export default Route;