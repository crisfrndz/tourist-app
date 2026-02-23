import { motion, scale } from "framer-motion";
export default function Nav() {
    const links = [
        {
            label: "Home",
            link: "/home",
        },
        {
            label: "Spots",
            link: "/spots",
        },
        {
            label: "About",
            link: "/about",
        },
    ];
    return (
        <header className=" lg:w-full flex justify-center p-3">
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-slate-200 h-11 w-1/2 rounded-full flex justify-around items-center gap-3 p-3"
            >
                <a
                    href=""
                    className="font-heading1 font-semibold bg-green-700 w-[25%] text-center py-1 text-slate-200 rounded-full"
                >
                    Home
                </a>
                <a
                    href=""
                    className="font-heading1 font-semibold  w-[25%] text-center py-1 rounded-full"
                >
                    Spots
                </a>
                <a
                    href=""
                    className="font-heading1 font-semibold  w-[25%] text-center py-1  rounded-full"
                >
                    Feedbacks
                </a>
                <a
                    href=""
                    className="font-heading1 font-semibold  w-[25%] text-center py-1  rounded-full"
                >
                    About
                </a>
            </motion.div>
        </header>
    );
}
