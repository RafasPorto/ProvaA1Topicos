import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/pages/Error";
import CadastroDespesa from "./components/pages/CadastrarDespesa";
import ListarDespesa from "./components/pages/ListarDespesa";
import MediaDespesa from "./components/pages/MediaDespesa";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroDespesa />,
      },
      {
        path: "/cadastrar",
        element: <CadastroDespesa />,
      },
      {
        path: "/listar",
        element: <ListarDespesa />,
      },
      {
        path: "/media",
        element: <MediaDespesa />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
