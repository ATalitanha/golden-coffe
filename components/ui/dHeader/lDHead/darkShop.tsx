import { ShoppingCart, Moon } from "@/public/svg/svg";
import toggleTheme from "@/components/ui/dark";
const DarkAndShop = () => {
    return (
        <section className="flex gap-5">
            <div className="text-orange-300 [&>*]:size-9">
                <ShoppingCart />
            </div>
            <div onClick={toggleTheme} className="text-orange-300 h-full ">
                <a href="#"  className="[&>*]:size-9 [&>*]:h-full">
                    <Moon />
                </a>
            </div>
        </section>
    );
};

export default DarkAndShop;