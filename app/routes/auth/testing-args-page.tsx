import { Form, Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { getClients } from "~/data/fake-data";

// la accion que se ejecuta en el servidor
export async function loader({ params }: Route.LoaderArgs) {
    // console.log("hola mundo desde el server loader de testing-args-page");
    return { msg: "ok", params: params };
}

// laaccionque se ejecuta en el cliente, es como useEffect
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    // const data = await getClients();
    // console.log(data);

    return { msg: "ok", params: params };
}

// layout o page que sirve como carga mientras se termina de cargar el cliente
export function HydrateFallback() {
    // haz un spinner o un mensaje de carga
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500">Loading...</p>
        </div>
    );
}

// evita problemas de hydration
clientLoader.hydrate = true as const;


export default function TestingArgsPage({
    loaderData,
    actionData,
    params,
    matches,
}: Route.ComponentProps) {

    const { id, name } = params;
    console.log({ id, name });

    return (
        <div>
            <h1 className="text-3xl text-indigo-500 font-semibold">Testing Arg page</h1>
            <p>Loader Data: {JSON.stringify(loaderData)}</p>
            <p>Action Data: {JSON.stringify(actionData)}</p>
            <p>Route Parameters: {JSON.stringify(params)}</p>
            <p>Matched Routes: {JSON.stringify(matches)}</p>
            <Link to={"/auth/testing"} className="underline text-blue-500 mt-2">Testing page</Link>

            

        </div>
    )
}