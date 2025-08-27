import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from "./pages/terms-of-use";
import Support from "./pages/support";
import ResetPassword from "./pages/ResetPassword";
import AdminPage from "./pages/adminPage";
import NotFound from "./pages/not-found";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <TooltipProvider>
      <Toaster />
      <RouterProvider router={router} />
    </TooltipProvider>
  </Provider>
);
