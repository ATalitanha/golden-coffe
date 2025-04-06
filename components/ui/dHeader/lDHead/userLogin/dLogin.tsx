import { ArrowRightEndOnRectangle } from "@/public/svg/svg";

const NavLogin = () => {
    return(
        <>
            <a href="#" className="hover:[&>article]:flex hover:[&>article]:opacity-100">
                <div className="flex items-center text-orange-300 gap-x-1">
                    <div className="size-9">
                        <ArrowRightEndOnRectangle/>
                    </div>
                    <div className="text-xl">
                        ورود | ثبت‌نام
                    </div>
                </div>
                <article className="fixed hidden opacity-0 transition-all ">

                </article>
            </a>
        </>
    );
};

export default NavLogin;