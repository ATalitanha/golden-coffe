// list of right desktop header
import { headList } from "@/lib/db";
import DShopMenu from "../dShopMenu";
const DHmenu = () => {
    return(
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
                                                <DShopMenu/>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
    )
};

export default DHmenu;