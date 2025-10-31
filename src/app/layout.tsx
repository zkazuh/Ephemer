import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
        <a>Testando um dois três</a>
      </main>
    </div>
  );
}
