import { ArrowRightEndOnRectangle } from "@/public/svg/svg";

const NavLogin = () => {
    return(
        <>
            <a href="#">
                <div className="flex items-center text-orange-300 gap-x-1">
                    <div className="size-9">
                        <ArrowRightEndOnRectangle/>
                    </div>
                    <div className="text-xl">
                        ورود | ثبت‌نام
                    </div>
                </div>
            </a>
        </>
    );
};

export default NavLogin;