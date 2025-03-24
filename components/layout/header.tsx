"use client";
import RHead from "../ui/dHeader/rHead";
import LHead from '@/components/ui/dHeader/lHead'

const Header = () => {
    
    return (
        <nav className="hidden md:flex items-center justify-between fixed mt-9 p-5 pl-10  max-w-[1728px] w-full rounded-3xl right-1/2 translate-1/2 mx-auto bg-black/50 backdrop-blur-md">
            {/*  right of header*/}
            <RHead/>
            {/* left 0f header */}
            <LHead/>
        </nav>
    );

    
}
export default Header;
