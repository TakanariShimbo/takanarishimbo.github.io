import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./providers";
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/400-italic.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/500-italic.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/600-italic.css";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style/custom-react-slick.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
