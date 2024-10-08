import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return(
        <section className={cn("py-8 max-w-2xl m-auto lg:px-4 px-2", props.className)}>
            {props.children}
        </section>
    )
}