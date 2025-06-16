import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navigate, redirect } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return redirect("/chat");
}

export default function Home() {
  console.log("llegó al componente Home");
  // return <Welcome />;
  return <Navigate to={"/chat"}></Navigate>
}
