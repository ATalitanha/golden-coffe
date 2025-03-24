import Image from "next/image";
import DHmenu from "./rDHead/listD";

const RHead = () => {
    return(
        <article className="flex items-center justify-center gap-x-9 ">
                {/* logo */}
                <section>
                    <div>
                        <Image src={"/image/svgs/logo.svg"} alt="" width={56} height={56}/>
                    </div>
                </section>
                {/* list */}
                <section className="">
                    <DHmenu/>
                </section>
            </article>
    )
};

export default RHead;