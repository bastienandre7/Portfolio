"use client";

import { Section } from "./Section";
import Swal from 'sweetalert2'

export const Contact = () => {

    async function handleSubmit( e : any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "add3c5ca-133a-4572-bc91-6f9ca9f90599",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            Swal.fire({
                title: "Success!",
                text: "Message envoyé!",
                icon: "success"
            })
        }
    }
    return (
        <Section className="flex justify-center ">
            <form onSubmit={handleSubmit} className="max-w-screen-sm w-full rounded-lg shadow-black">
                <h2 className="text-3xl">Contact</h2>
                <div className="mt-5">
                    <label>Nom complet</label>
                    <input type="text" name="name" className="w-full h-12 border-2 border-solid outline-none rounded-md p-4 text-base mt-2" placeholder="Entrer votre nom" required />
                </div>
                <div className="mt-5">
                    <label>Email</label>
                    <input type="email" name="email" className="w-full h-12 border-2 border-solid outline-none rounded-md p-4 text-base mt-2" placeholder="Entrer votre email" required />
                </div>
                <div className="mt-5">
                    <label>Votre Message</label>
                    <textarea name="message" className="w-full h-52 border-2 border-solid outline-none rounded-md p-4 text-base mt-2 resize-none" placeholder="Entrer votre message" required />
                </div>
                <button className="flex justify-center w-full rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                type="submit">
                Envoyer
                </button>
            </form>
        </Section>
    ) 
}