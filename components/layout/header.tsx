"use client";
import { headList, shopList } from "@/lib/db";
import toggleTheme from "../ui/dark";
import {ShoppingCart, Sun, Moon} from '@/public/svg/svg';

const Header = () => {
    
    return (
        <nav className="flex items-center justify-between fixed mt-9 p-5 pl-10  max-w-[1728px] w-full rounded-3xl right-1/2 translate-1/2 mx-auto bg-black/50 backdrop-blur-md">
            {/*  right of header*/}
            <article className="flex items-center justify-center gap-x-9 ">
                {/* logo */}
                <section>
                    <div className="size-14">
                        <img onClick={toggleTheme} src="/image/svgs/logo.svg" alt="" className="w-full" />
                    </div>
                </section>
                {/* list */}
                <section className="">
                    <ul className="flex justify-center items-center text-gray-300  text-xl gap-x-9">
                        {headList.map(l => {
                            if (l.id != '2') {

                                return (
                                    <li className="transition-all hover:text-orange-200" key={l.id}>
                                        <a key={l.slug} href="#">{l.name}</a>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="transition-all hover:text-orange-200 hover:[&>div]:flex hover:[&>div]:opacity-100" key={l.id}>
                                        <a href="#" key={l.slug}>{l.name}</a>
                                        <div className=" fixed hidden opacity-0 flex-col py-5 px-6  gap-4 rounded-2xl border-t-[3px] border-orange-200 dark:border-orange-300 transition-all shadow-default  bg-white dark:bg-zinc-700">
                                            {shopList.map(s => {
                                                return (
                                                    <div key={s.id} className="transition-all text-zinc-700 dark:text-white hover:text-orange-300">
                                                        <a href="#">{s.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </section>
            </article>
            {/* left 0f header */}
            <article className="flex justify-center items-center gap-x-2.5">
                {/* shop and dark cart */}
                <section className="flex gap-5">
                    <div className="text-orange-300 [&>*]:size-9">
                        <ShoppingCart/>
                    </div>
                    <div onClick={toggleTheme} className="text-orange-300 h-full [&>*]:size-9 [&>*]:h-full">
                        <Moon/>
                    </div>
                </section>
                {/* line */}
                <div className="h-14 w-0.5 bg-white/20"></div>
                {/* login or user */}
                <section>

                </section>
            </article>
        </nav>
    );

    
}
export default Header;