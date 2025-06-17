
import type { Client } from '~/chat/interface/chat.interface';
import NoContactSelected from './NoContactSelected'
import { useLoaderData, useNavigation, useParams } from 'react-router'
import ContactInformationCard from './ContactInformationCard';
import ContactInformationSkeleton from './ContactInformationSkeleton';

const ContactInformation = () => {

    const { id } = useParams();
    // clients y loaderData viene del componente padre ChatLayout
    const { clients = [] } = useLoaderData();
    const { state, formMethod } = useNavigation();

    // previniendo la carga al mandar un nuevo mensaje
    if (state === "loading" && formMethod !== "POST")
        return (<ContactInformationSkeleton />)

    if (!id || !clients.length) {
        return <NoContactSelected />
    }

    const contact = clients.find((client: Client) => client.id === id);
    if (!contact) {
        return <NoContactSelected />
    }

    return (
        <ContactInformationCard client={contact} />
    )
}

export default ContactInformation