import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import HeaderItem from "../components/HeaderItem";
import Nav from "./Nav";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-10  justify-between">
            <div className="flex justify-evenly flex-grow max-w-2xl ">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightningBoltIcon} />
                <HeaderItem title="Search" Icon={SearchIcon} />

                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />

                <HeaderItem title="Collection" Icon={CollectionIcon} />

                <HeaderItem title="Account" Icon={UserIcon} />

            </div>


            <Image
                className="object-contain"
                src='https://links.papareact.com/ua6' alt="hulu logo"
                width={200}
                height={100} />
            <Nav />


        </header>)
}

export default Header

