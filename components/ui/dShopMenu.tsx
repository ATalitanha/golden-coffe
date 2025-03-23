// this file return menu of shop in desktop component

import { shopList } from "@/lib/db"
const DShopMenu = () => {
    return(
        <div className=" fixed hidden opacity-0 flex-col py-5 px-6  gap-4 rounded-2xl border-t-[3px] border-orange-200 dark:border-orange-300 transition-all shadow-default  bg-white dark:bg-zinc-700">
                                            {shopList.map(s => {
                                                return (
                                                    <div key={s.id} className="transition-all text-zinc-700 dark:text-white hover:text-orange-300">
                                                        <a href="#">{s.name}</a>
                                                    </div>
                                                );
                                            })}
                                        </div>
    );
};

export default DShopMenu;