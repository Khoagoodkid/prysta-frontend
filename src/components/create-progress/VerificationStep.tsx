"use client"
import ReactCodeInput from "react-code-input"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ProfileProps } from "@/app/signup/page";
export const VerificationStep = ({userData, setNextBtnDisabled}:{userData:ProfileProps,setNextBtnDisabled:(e:any)=>void}) => {
    const codeSent = useRef(false);
    const [typingCode, setTypingCode] = useState("");
    const [verCode,setVerCode] = useState<number>(0)
    useEffect(() => {
        if(codeSent.current) {
            codeSent.current = false;
            return;
        } //avoid useEffect rendering twice
        generateVerCode()
        codeSent.current = true;
    }, [])
    const generateVerCode = () => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        const code = array[0] % 1000000;
      
        setVerCode(code)
        axios.post(process.env.API_URL + 'auth/', {
            email:userData.email,
            ver_code:code
        })
    }
    useEffect(() => {
        if(typingCode == JSON.stringify(verCode)) setNextBtnDisabled(false)
    },[typingCode, verCode])
    return (
        <div className="w-full h-full flex flex-col items-start">
            We have sent to your email the verification code. 
            <ReactCodeInput fields={6} name="" inputMode="tel"
            onChange={(e) => setTypingCode(e)}
            />
            <span>Don&apos;t receive the code?<a className="underline cursor-pointer" onClick={() =>generateVerCode()}>Resend email</a></span>
        </div>
    )
}