import { User } from "@/public/svg/svg";

const NavUser = () => {
    return(
        <>
            <a href="#">
                            <div className="flex items-center text-orange-300 gap-x-1">
                                <div className="size-9">
                                    <User/>
                                </div>
                                <div className="text-xl">
                                    حساب کاربری
                                </div>
                            </div>
                        </a>
        </>
    );
};

export default NavUser;