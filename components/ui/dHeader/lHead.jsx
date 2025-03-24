import {Moon, ShoppingCart} from '@/public/svg/svg'
import toggleTheme from '../dark';
const LHead = () => {
    return(
        <article className="flex justify-center items-center gap-x-2.5">
                        {/* shop and dark cart */}
                        <section className="flex gap-5">
                            <div className="text-orange-300 [&>*]:size-9">
                                <ShoppingCart/>
                            </div>
                            <div onClick={toggleTheme} className="text-orange-300 h-full ">
                                <a href="#" className="[&>*]:size-9 [&>*]:h-full">
                                    <Moon/>
                                </a>
                            </div>
                        </section>
                        {/* line */}
                        <div className="h-14 w-0.5 bg-white/20"></div>
                        {/* login or user */}
                        <section>
        
                        </section>
                    </article>
    )
};

export default LHead;