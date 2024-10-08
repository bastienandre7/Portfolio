import { Section } from "./Section"

export const Footer = () => {
    return (
        <footer className="bg-card bg-black dark:border-slate-700">
            <div className="max-w-2xl m-auto border-x-0 border-b-0 border dark:border-slate-700">
                <Section className="py-8">
                    <p className="text-muted-foreground text-center">@Copywrite 2024 Bastien Andre</p>
                </Section>
            </div>
        </footer>
    ) 
}