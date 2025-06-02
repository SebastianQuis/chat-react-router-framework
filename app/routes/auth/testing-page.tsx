import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";

// metadatos para la ruta
export function meta() {
    return [
        { title: "Testing" },
        {
            property: "og:title",
            content: "Productos",
        },
        {
            name: "description",
            content: "Los mejores productos de la tienda",
        },
    ];
}

// esto sale en network del navegador, buscar por x-stretchy-pants
export function headers() {
    return {
        "X-Stretchy-Pants": "its for fun -  headers x-stretchy-pants",
        "Cache-Control": "max-age=300, s-maxage=3600",
    };
}

// definir algun tipo de estilos, imagenes precargadas, favicon, etc.
// se puede ver en los elements tab del navegador
export function links() {
    return [
        // {
        //     rel: "icon",
        //     href: "/favicon.png",
        //     type: "image/png",
        // },
        // {
        //     rel: "stylesheet",
        //     href: "https://example.com/some/styles.css",
        // },
        // {
        //     rel: "preload",
        //     href: "/images/banner.jpg",
        //     as: "image",
        // },
    ];
}


// export async function loader() {
//     console.log("hola mundo desde el server loader");
//     return { msg: "Hello from the server loader" };
// }

// se ejecuta unicamente en el cliente - browser
export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
    console.log("hola mundo desde el client loader");
    // call the server loader
    // const serverData = await serverLoader();
    // And/or fetch data on the client
    // Return the data to expose through useLoaderData()
    return {
        message: "Hello from the client loader!",
        // serverData: serverData,
    };
}


// server action - se ejecuta en el servidor
// export async function action({ request }: Route.ActionArgs) {
//     const data = await request.formData();
//     const allData = Object.fromEntries(data);

//     //   const todo = await fakeDb.addItem({
//     //     title: data.get("title"),
//     //   });
//     console.log("desde al action del server")
//     console.log(allData)

//     return { ok: true, allData };
// }

// action del cliente - se ejecuta en el cliente, el serverLoader se puede llamar si es necesario y viene de la action del servidor
export async function clientAction({ serverLoader, request }: Route.ClientLoaderArgs) {

    // can still call the server action if needed
    console.log("desde el client action del cliente")
    // const data = await serverLoader();
    const data = await request.formData();
    const allData = Object.fromEntries(data);
    return { ok: true, allData };
}


export default function MyRouteComponent({
    loaderData,
    actionData,
    params,
    matches,
}: Route.ComponentProps) {

    const navigation = useNavigation();
    const isPosting = navigation.state === "submitting";

    console.log({ navigation, isSubmitting: isPosting });

    return (
        <div>
            <h1 className="text-3xl text-indigo-500 font-semibold">Testing page</h1>
            <p>Loader Data: {JSON.stringify(loaderData)}</p>
            <p>Action Data: {JSON.stringify(actionData)}</p>
            <p>Route Parameters: {JSON.stringify(params)}</p>
            <p>Matched Routes: {JSON.stringify(matches)}</p>
            <NavLink
                to={"/auth/testing-arg/ABC-123/John"}
                className={({ isPending }) =>
                    isPending
                        ? "underline text-gray-300 mt-2"
                        : "underline text-blue-500 mt-2"
                }
            >
                Testing arg page
            </NavLink>

            <hr className="my-2" />
            {/* form: para referencialo en la action del servidor */}
            {/* FORM: para referencialo en el clientAction */}
            {/* verficiar siempre con los 2 */}
            <Form method="post" className="flex flex-col gap-2">
                <input type="text" name="title" className="border-2 border-gray-300 rounded-md p-2" />
                <button
                    disabled={isPosting}
                    type="submit"
                    className="border-2 bg-blue-400 text-white rounded-md p-2 disabled:opacity-40">
                    {isPosting ? "Creating..." : "Create Todo"}
                </button>
            </Form>
        </div>
    )
}