import DarkAndShop from "./lDHead/darkShop";
import UserOrLogin from "./lDHead/userOrLogin";

const LHead = () => {
    return(
        <article className="flex justify-center items-center gap-x-2.5">
                        {/* shop and dark cart */}
                            <DarkAndShop/>
                        {/* line */}
                        <div className="h-14 w-0.5 bg-white/20"></div>
                        {/* login or user */}
                        <section>
                            <UserOrLogin/>
                        </section>
                    </article>
    );
};

export default LHead;