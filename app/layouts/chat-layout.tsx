import { X } from 'lucide-react'
import { Form, Outlet, redirect } from 'react-router'
import ContactInformation from '~/chat/component/contact-information/ContactInformation'
import ContactList from '~/chat/component/ContactList'
import { Button } from '~/components/ui/button'
import { getClients } from '~/data/fake-data'
import type { Route } from './+types/chat-layout'
import { getSession } from '~/sessions.server'

// esto es del lado del servidor
export async function loader({
    request,
}: Route.LoaderArgs) {
    // validando si no hay un sesion activa
    const session = await getSession(request.headers.get("Cookie"));
    if (!session.has("token")) {
        return redirect("/auth/login");
    }

    const clients = await getClients();
    return { clients };
}

const ChatLayout = ({ loaderData }: Route.ComponentProps) => {
    const { clients } = loaderData;

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className="w-64 border-r bg-muted/10">
                <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary" />
                        <span className="font-semibold">NexTalk</span>
                    </div>
                </div>

                <ContactList clients={clients} />

                <div className='w-full flex text-center'>
                    <Form method="POST" action="/auth/logout" className='w-full mx-2'>
                        <button className='w-full py-2 rounded-md bg-red-300 cursor-pointer text-red-600 hover:bg-red-200'>Logout</button>
                    </Form>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex w-full">
                <div className="w-full flex flex-col">
                    {/* Header */}
                    <header className="h-14 border-b px-4 flex items-center justify-between">
                        <div></div> {/* Empty div to maintain spacing */}
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                                Save conversation
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </header>
                    <Outlet />
                </div>

                {/* Right Panel - Contact Details */}
                <ContactInformation />
            </div>
        </div>
    )
}

export default ChatLayout