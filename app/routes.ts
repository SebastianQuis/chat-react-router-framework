import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // layout - route
    ...prefix("/auth", [ // prefix es totalmente opcional, si se quiere mantener /auth como prefijo en la URL
        layout("layouts/auth-layout.tsx", [
            route("login", "routes/auth/login-page.tsx"),
            route("register", "routes/auth/register-page.tsx"),
            route("testing", "routes/auth/testing-page.tsx"),
            route("testing-arg/:id/:name", "routes/auth/testing-args-page.tsx"),
        ]),
    ]),


    ...prefix("/chat", [
        layout("layouts/chat-layout.tsx", [
            index("routes/chat/no-chat-selected.tsx"),
            route("client/:id", "routes/chat/chat-page.tsx"),
        ]),
    ]),


] satisfies RouteConfig;
