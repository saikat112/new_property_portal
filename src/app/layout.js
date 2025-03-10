"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NavBar from "@/components/navbar/NavBar";

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <NavBar />
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
