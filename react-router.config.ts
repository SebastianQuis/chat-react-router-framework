import type { Config } from "@react-router/dev/config";

// obtencion de las rutas con slug para SEO como en nextjs
const testingArgsRouter = [...Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  const names = [
    "iphone-14",
    "iphone-14-pro",
    "iphone-14-pro-max",
    "iphone-15",
    "iphone-15-pro",
    "iphone-15-pro-max"
  ];

  const name = names[Math.floor(Math.random() * names.length)];

  return `auth/testing-arg/${id}/${name}`;

})]


export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`

  // configuracion para react router en una aplicacion client-side render.
  // ssr: true,

  // configuracion por defecto para react router en una server-side render aplication.
  ssr: true,


  // pre-renderer de paginas que no van a cambiar durante la ejecucion de la aplicacion.
  // paginas que se contruyen antes de que la aplicacion se ejecute o el usuario la solicite.
  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "/auth/testing",

      // products - creando rutas estaticas de productos
      // "/product/iphone-14",
      // "/product/iphone-14-pro",
      // "/product/iphone-14-pro-max",
      // "/product/iphone-15",
      // "/product/iphone-15-pro",
      // "/product/iphone-15-pro-max",

      // creando rutas estaticas de productos con un bucle
      ...testingArgsRouter,
    ]
  }


} satisfies Config;
