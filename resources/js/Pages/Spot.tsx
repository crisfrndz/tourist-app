import Body from "@/Layouts/Body";
import React from "react";

export default function Spot() {
    return (
        <Body>
            <div className="flex flex-col items-center">
                {/* carousel */}
                <div className="carousel w-[80%] rounded-2xl">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full rounded-2xl overflow-hidden"
                    >
                        {/* IMAGE */}
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full h-full object-cover"
                        />

                        {/* BOTTOM GRADIENT */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* TITLE (BOTTOM) */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                            <h1 className="text-3xl font-bold text-white">
                                Beautiful Spot
                            </h1>
                            <p className="text-white/80 text-sm">
                                Nature & Adventure
                            </p>
                        </div>

                        {/* NAV BUTTONS */}
                        <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 justify-between">
                            <a href="#slide4" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
                {/* Body */}
                <div>
                    <div>T</div>
                </div>
            </div>
        </Body>
    );
}
