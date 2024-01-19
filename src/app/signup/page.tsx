"use client"
import { Page } from "@/Page"
import { PrystaLogoBadge } from "@/components/logobadge/PrystaLogoBadge"
import { Form } from "@/components/signup/form"

import { useState } from "react"
export type ProfileProps = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
const SignUp = () => {
   
    const [profile, setProfile] = useState<ProfileProps>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
   
    const signUpHandler = (e: any) => {
        e.preventDefault()
       
    }
    return (
        <Page includeFooter={false}>
            <div className="overflow-hidden h-auto w-screen py-[10em] flex flex-col items-end justify-end gap-10 md:gap-0 bg-[url('https://files.oaiusercontent.com/file-MtvK3Ii9P4XCpGDMJxKZ9d6F?se=2024-01-17T21%3A47%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a4aba21-1e30-488a-9379-83fdd253464a.webp&sig=yQR5DqW9XjKGOQZDmixf7fmbRH0c67MJGSGFW21QL%2Bo%3D')] bg-no-repeat bg-cover">
                <div className="w-full md:w-3/5 h-full pl-[2em] md:pl-0 flex flex-col items-start text-white md:text-black">
                    <PrystaLogoBadge>Prysta</PrystaLogoBadge>
                    <h1 className="md:text-[1.5em] mt-[1em]">
                        Shopping now
                    </h1>
                    <p className="w-[13em] font-[700] text-[1.8em] md:text-[2.5em]">
                        Unleash the style <br/> <span className="text-[blue]">inside YOU, </span> Enjoy your dream shopping
                    </p>
                    <p className="mt-[2em] w-auto">
                    hehllolo  dlooda  sdasod msa
                    </p>
                    <a className="mt-[1em] py-[.8em] px-[3em] rounded-[2em] border-white md:border-[black] border-[1px]">
                        <span>Explore more</span>
                    </a>
                </div>
                <div className="w-full text-white md:text-black md:w-4/5 h-full flex justify-center px-[1em] md:justify-end md:pr-[4em]">
                    <Form profile={profile} setProfile={setProfile} signUpHandler={signUpHandler}/>
                </div>
            </div>
        </Page>
    )
}
export default SignUp