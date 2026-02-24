import Body from "@/Layouts/Body";
import { Description } from "@headlessui/react";
import { Space } from "lucide-react";
import { div } from "motion/react-client";
import React from "react";

export default function Spots() {
    const spots = [
        {
            title: "Misty Mountain Peak",
            badge: "FEATURED",
            description: "A breathtaking view above the clouds.",
            img: "https://picsum.photos/seed/spot1/1200/600",
        },
        {
            title: "Hidden Forest Trail",
            badge: "POPULAR",
            description: "A quiet path surrounded by towering trees.",
            img: "https://picsum.photos/seed/spot2/1200/600",
        },
        {
            title: "Crystal Blue Lake",
            badge: "NEW",
            description: "Clear waters reflecting the open sky.",
            img: "https://picsum.photos/seed/spot3/1200/600",
        },
        {
            title: "Golden Sand Dunes",
            badge: "HOT",
            description: "Rolling dunes glowing under the sun.",
            img: "https://picsum.photos/seed/spot4/1200/600",
        },
        {
            title: "Sunset Cliff View",
            badge: "FEATURED",
            description: "Watch the sun melt into the horizon.",
            img: "https://picsum.photos/seed/spot5/1200/600",
        },
        {
            title: "Serene River Bend",
            badge: "RELAX",
            description: "A calm river flowing through nature.",
            img: "https://picsum.photos/seed/spot6/1200/600",
        },
        {
            title: "Emerald Valley",
            badge: "POPULAR",
            description: "Lush green fields stretching endlessly.",
            img: "https://picsum.photos/seed/spot7/1200/600",
        },
        {
            title: "Rocky Canyon",
            badge: "ADVENTURE",
            description: "Carved by time and flowing water.",
            img: "https://picsum.photos/seed/spot8/1200/600",
        },
        {
            title: "Calm Seaside Escape",
            badge: "NEW",
            description: "Gentle waves and salty breeze.",
            img: "https://picsum.photos/seed/spot9/1200/600",
        },
        {
            title: "Foggy Pine Woods",
            badge: "MYSTIC",
            description: "A forest wrapped in morning fog.",
            img: "https://picsum.photos/seed/spot10/1200/600",
        },

        {
            title: "Snowy Ridge",
            badge: "COLD",
            description: "A frozen landscape of white peaks.",
            img: "https://picsum.photos/seed/spot11/1200/600",
        },
        {
            title: "Golden Wheat Fields",
            badge: "CALM",
            description: "Soft waves of grain in the wind.",
            img: "https://picsum.photos/seed/spot12/1200/600",
        },
        {
            title: "Hidden Waterfall",
            badge: "FEATURED",
            description: "A secret fall deep in the jungle.",
            img: "https://picsum.photos/seed/spot13/1200/600",
        },
        {
            title: "Lakeside Morning",
            badge: "RELAX",
            description: "Peaceful sunrise by the lake.",
            img: "https://picsum.photos/seed/spot14/1200/600",
        },
        {
            title: "Island Paradise",
            badge: "HOT",
            description: "White sands and turquoise waters.",
            img: "https://picsum.photos/seed/spot15/1200/600",
        },
        {
            title: "Volcanic Plains",
            badge: "ADVENTURE",
            description: "Rugged land shaped by fire.",
            img: "https://picsum.photos/seed/spot16/1200/600",
        },
        {
            title: "Twilight Meadow",
            badge: "NEW",
            description: "Soft colors under fading light.",
            img: "https://picsum.photos/seed/spot17/1200/600",
        },
        {
            title: "Desert Oasis",
            badge: "FEATURED",
            description: "A refreshing sight in dry lands.",
            img: "https://picsum.photos/seed/spot18/1200/600",
        },
        {
            title: "Ocean Cliff Walk",
            badge: "POPULAR",
            description: "Cliffs overlooking endless blue.",
            img: "https://picsum.photos/seed/spot19/1200/600",
        },
        {
            title: "Autumn Leaf Path",
            badge: "SEASONAL",
            description: "A path covered in warm colors.",
            img: "https://picsum.photos/seed/spot20/1200/600",
        },

        {
            title: "Quiet Hilltop",
            badge: "CALM",
            description: "A gentle breeze and open sky.",
            img: "https://picsum.photos/seed/spot21/1200/600",
        },
        {
            title: "Rainforest Canopy",
            badge: "ADVENTURE",
            description: "Life thriving above the ground.",
            img: "https://picsum.photos/seed/spot22/1200/600",
        },
        {
            title: "Starlit Camp",
            badge: "NIGHT",
            description: "Stars shining over the campsite.",
            img: "https://picsum.photos/seed/spot23/1200/600",
        },
        {
            title: "Coastal Sunrise",
            badge: "NEW",
            description: "Early light over the sea.",
            img: "https://picsum.photos/seed/spot24/1200/600",
        },
        {
            title: "Marble Rock Coast",
            badge: "FEATURED",
            description: "Smooth stones by the shore.",
            img: "https://picsum.photos/seed/spot25/1200/600",
        },
        {
            title: "Deep Blue Fjord",
            badge: "POPULAR",
            description: "Towering cliffs and deep waters.",
            img: "https://picsum.photos/seed/spot26/1200/600",
        },
        {
            title: "Lavender Fields",
            badge: "RELAX",
            description: "Aromatic fields in full bloom.",
            img: "https://picsum.photos/seed/spot27/1200/600",
        },
        {
            title: "Rolling Green Hills",
            badge: "CALM",
            description: "Endless waves of green.",
            img: "https://picsum.photos/seed/spot28/1200/600",
        },
        {
            title: "Hidden Cave Beach",
            badge: "ADVENTURE",
            description: "A secret beach inside stone walls.",
            img: "https://picsum.photos/seed/spot29/1200/600",
        },
        {
            title: "Moonlit Shore",
            badge: "NIGHT",
            description: "Silver light reflecting on water.",
            img: "https://picsum.photos/seed/spot30/1200/600",
        },

        {
            title: "Ancient Rock Formations",
            badge: "FEATURED",
            description: "Natural sculptures shaped by time.",
            img: "https://picsum.photos/seed/spot31/1200/600",
        },
        {
            title: "Mirror Lake",
            badge: "POPULAR",
            description: "Perfect reflections on still water.",
            img: "https://picsum.photos/seed/spot32/1200/600",
        },
        {
            title: "Windy Grasslands",
            badge: "CALM",
            description: "Tall grass dancing with the wind.",
            img: "https://picsum.photos/seed/spot33/1200/600",
        },
        {
            title: "Frozen Waterfall",
            badge: "COLD",
            description: "Ice sculpted by flowing water.",
            img: "https://picsum.photos/seed/spot34/1200/600",
        },
        {
            title: "Coral Coastline",
            badge: "HOT",
            description: "Colorful life beneath the waves.",
            img: "https://picsum.photos/seed/spot35/1200/600",
        },
        {
            title: "Sunlit Canyon Path",
            badge: "ADVENTURE",
            description: "Light cutting through stone walls.",
            img: "https://picsum.photos/seed/spot36/1200/600",
        },
        {
            title: "Mossy Stone Bridge",
            badge: "MYSTIC",
            description: "A bridge reclaimed by nature.",
            img: "https://picsum.photos/seed/spot37/1200/600",
        },
        {
            title: "Tropical Lagoon",
            badge: "FEATURED",
            description: "Warm waters and gentle tides.",
            img: "https://picsum.photos/seed/spot38/1200/600",
        },
        {
            title: "Cliffside Road",
            badge: "POPULAR",
            description: "A scenic drive with ocean views.",
            img: "https://picsum.photos/seed/spot39/1200/600",
        },
        {
            title: "Quiet Winter Woods",
            badge: "COLD",
            description: "Snow-covered trees in silence.",
            img: "https://picsum.photos/seed/spot40/1200/600",
        },

        {
            title: "Golden Hour Plains",
            badge: "FEATURED",
            description: "Soft light across open land.",
            img: "https://picsum.photos/seed/spot41/1200/600",
        },
        {
            title: "Hidden Alpine Lake",
            badge: "NEW",
            description: "A peaceful lake high above.",
            img: "https://picsum.photos/seed/spot42/1200/600",
        },
        {
            title: "Jungle River Crossing",
            badge: "ADVENTURE",
            description: "A wild crossing through nature.",
            img: "https://picsum.photos/seed/spot43/1200/600",
        },
        {
            title: "Palm Tree Coast",
            badge: "HOT",
            description: "Relax beneath swaying palms.",
            img: "https://picsum.photos/seed/spot44/1200/600",
        },
        {
            title: "Stone Arch Cliffs",
            badge: "FEATURED",
            description: "Natural arches by the sea.",
            img: "https://picsum.photos/seed/spot45/1200/600",
        },
        {
            title: "Morning Dew Fields",
            badge: "CALM",
            description: "Fresh dew under early light.",
            img: "https://picsum.photos/seed/spot46/1200/600",
        },
        {
            title: "Quiet Coastal Village",
            badge: "RELAX",
            description: "Slow life by the shore.",
            img: "https://picsum.photos/seed/spot47/1200/600",
        },
        {
            title: "Burning Sky Sunset",
            badge: "HOT",
            description: "Fiery colors at dusk.",
            img: "https://picsum.photos/seed/spot48/1200/600",
        },
        {
            title: "Glacier Valley",
            badge: "COLD",
            description: "Massive ice carving the land.",
            img: "https://picsum.photos/seed/spot49/1200/600",
        },
        {
            title: "Endless Horizon",
            badge: "FEATURED",
            description: "Where earth meets sky.",
            img: "https://picsum.photos/seed/spot50/1200/600",
        },
    ];
    return (
        <Body>
            {/* hero */}
            <div
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://picsum.photos/1600/900?blur=2')",
                }}
            >
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* CONTENT */}
                <div className="relative mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-heading1 font-bold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
                        Discover Hidden Paradises
                    </h1>
                    <p className="mb-8 text-lg font-heading3 text-gray-200 lg:text-xl sm:px-16 xl:px-48">
                        Step into breathtaking escapes where turquoise waters
                        meet towering limestone cliffs. Every journey unfolds
                        with the rhythms of island life and the timeless warmth
                        of Filipino hospitality.
                    </p>
                </div>
            </div>
            {/* title */}
            <div className="flex flex-col items-center">
                <div className="px-5 py-20">
                    <span className="font-heading1 text-5xl font-medium">
                        EXPLORE OUR SPOTS
                    </span>{" "}
                    <br />
                    <span className="text-xl font-heading3">
                        Journey Into Kamalig's Peaceful Serenrty
                    </span>{" "}
                    <br />
                    <span>
                        Every spots at Kamalig is a sanctuary shaped by its
                        landscape, offering experiences as varied as the islands
                        themselves.
                    </span>
                </div>
                {/* cards */}
                <div className="grid grid-cols-3 gap-5 px-10">
                    {spots.map((spot) => (
                        <div>
                            <div className="card bg-base-100 w-100 shadow-sm">
                                <figure className="relative h-[500px] w-full overflow-hidden">
                                    <img
                                        src={spot.img}
                                        alt={spot.title}
                                        className="h-full w-full object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {spot.title}
                                        {/* <div className="badge badge-secondary">
                                            NEW
                                        </div> */}
                                    </h2>
                                    <p>{spot.description}</p>
                                    <div className="card-actions justify-start">
                                        <a
                                            className="group relative inline-block"
                                            href="#"
                                        >
                                            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                                            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase">
                                                Learn more
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Body>
    );
}
