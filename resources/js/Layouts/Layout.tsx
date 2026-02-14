import React, { Children, PropsWithChildren } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="lg:mx-10">
                <div className="">
                    <Nav />
                </div>
                <div>{children}</div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
