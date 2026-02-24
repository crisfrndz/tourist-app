import { PropsWithChildren } from "react";

interface BodyProps extends PropsWithChildren {
    bgColor?: string; // optional bg color
}

export default function Body({ children, bgColor = "" }: BodyProps) {
    return <div className={`${bgColor} pt-20 min-h-screen`}>{children}</div>;
}
