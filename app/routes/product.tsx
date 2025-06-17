import type { Route } from "./+types/product";


export async function loader({ params }: Route.LoaderArgs) {
    const { name } = params;
    // console.log(name);
    return { name: name };

}



export default function ProductPage({ loaderData }: Route.ComponentProps) {

    const productName = loaderData.name;

    return (
        <div>{productName}</div>
    )
}
