import React from 'react'
import ContactInformationCard from './ContactInformationCard'
import ContactInformationSkeleton from './ContactInformationSkeleton'
import NoContactSelected from './NoContactSelected'
import { useParams } from 'react-router'

const ContactInformation = () => {

    const params = useParams();
    console.log(params.id);
    

    return (

        // contact sin information
        <NoContactSelected/>

        // contactskeleton
        // <ContactInformationSkeleton />

        // <ContactInformationCard />
    )
}

export default ContactInformation