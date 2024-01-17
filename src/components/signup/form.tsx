"use client"
import { EmailIcon } from "@/icons/EmailIcon"
import { ProfileCardIcon } from "@/icons/ProfileCardIcon"
import { UserIcon } from "@/icons/UserIcon"
import Link from "next/link"
import { ReactNode, useState } from "react"
type ProfileProps = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
type FormFieldProps = {
    id: string,
    onchange: (e: any) => void,
    icon: ReactNode,
    text: string,
    width: string
}
export const Form = () => {
    const [profile, setProfile] = useState<ProfileProps>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const formLayout: FormFieldProps[] = [
        {
            id: 'username',
            onchange: (e: any) => setProfile({ ...profile, username: e.target.value }),
            icon:
                <UserIcon />
            ,
            text: 'Username',
            width: '12',
        },
        {
            id: 'firstname',
            onchange: (e: any) => setProfile({ ...profile, firstName: e.target.value }),
            icon:
                <ProfileCardIcon />
            ,
            text: 'First name',
            width: '6',
        },
        {
            id: 'lastname',
            onchange: (e: any) => setProfile({ ...profile, lastName: e.target.value }),
            icon:
                <ProfileCardIcon />
            ,
            text: 'Last name',
            width: '6',
        },
        {
            id: 'email',
            onchange: (e: any) => setProfile({ ...profile, email: e.target.value }),
            icon:
                <EmailIcon />
            ,
            text: 'Email',
            width: '12',
        },
        {
            id: 'password',
            onchange: (e: any) => setProfile({ ...profile, password: e.target.value }),
            icon:
                <UserIcon />
            ,
            text: 'Password',
            width: '12',
        },
    ]
    const signUpHandler = (e: any) => {
        e.preventDefault()
        console.log(profile)
    }
    return (
        <form className="w-[95%] md:w-[35em] grid grid-cols-12 items-start gap-5" onSubmit={signUpHandler}>
            <span className="col-span-12 md:text-[3em] font-[700] leading-[1em]">
                Create <br/>
                New Account.
            </span>
            {formLayout.map((field, index) => {
                return (
                    <FormField key={index} field={field} />
                )
            })}
            <div className="flex justify-end col-span-12">
                <span> Already A Member?</span>
                <Link href="/login">
                    <span className="ml-2 underline"> Login</span>
                </Link>
            </div>
            <button type="submit" className="col-span-12 py-[1em] bg-base-v2-6 rounded-[2em] text-white font-[700] hover:opacity-[.8]">Create account</button>
        </form>
    )
}
const FormField = ({ field }: { field: FormFieldProps }) => {
    const { id, onchange, icon, text, width } = field
    return (
        <div className={`flex items-center gap-[1em] relative h-[4em] border-[1px] border-black px-[1em] rounded-[1em] items-end bg-[#333645] text-white col-span-${width}`}>
            <span className="absolute left-5 top-1 text-[.8em] text-base-v2-6 font-[700]">{text}</span>
            <input className="w-full pt-3 pl-1 h-[80%] border-none flex items-end focus:outline-none bg-[#333645]"
                onChange={onchange}
                type={id}
            />
            <div className="z-[100] w-6 h-6">
                {icon}

            </div>

        </div>
    )
}