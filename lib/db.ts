
import { headMenu, shopMenu, product, bigProduct, showCart, category, post, ChangeLog } from "./types";


export const headList: headMenu[] = [
    { id: '1', name: 'صفحه اصلی', slug: 'صفحه-اصلی' },
    { id: '2', name: 'فروشگاه', slug: '-فروشگاه' },
    { id: '3', name: 'دیکشنری', slug: '-دیکشنری' },
    { id: '4', name: 'بلاگ', slug: '-بلاگ' },
    { id: '5', name: 'درباره ما', slug: 'درباره-ما' },
    { id: '6', name: 'تماس با ما', slug: 'تماس-با-ما' },
];

export const shopList: shopMenu[] = [
    { id: '1', name: 'قهوه ویژه', slug: 'قهوه-ویژه' },
    { id: '2', name: 'ویژه در سطح جهانی', slug: 'ویژه-در-سطح-جهانی' },
    { id: '3', name: 'قهوه درجه یک', slug: 'قهوه-درجه-یک' },
    { id: '4', name: 'ترکیبات تجاری', slug: 'ترکیبات-تجاری' },
    { id: '5', name: 'کپسول قهوه', slug: 'کپسول-قهوه' },
    { id: '6', name: 'قهوه زینو برزیلی', slug: 'قهوه-زینو-برزیلی' },

];

export const products: product[] = [
    {
        id: '1',
        imge: './image/products/p4.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
        takfif: 0,

    },
    {
        id: '2',
        imge: './image/products/p3.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: false,
        price: 175000,
        star: 3,
        takfif: 0,
    },
    {
        id: '3',
        imge: './image/products/p1.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 5,
        takfif: 12,
    },
    {
        id: '4',
        imge: './image/products/p2.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
        takfif: 0,
    },
    {
        id: '5',
        imge: './image/products/p1.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
        takfif: 12,
    },
    {
        id: '6',
        imge: './image/products/p2.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: false,
        price: 175000,
        star: 2,
        takfif: 0,
    },
    {
        id: '7',
        imge: './image/products/p4.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 5,
        takfif: 0,
    },
    {
        id: '8',
        imge: './image/products/p3.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
        takfif: 0,

    },
];

export const bigProducts: bigProduct[] = [
    {
        id: '1',
        imge: './image/products/p5.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
    },
    {
        id: '2',
        imge: './image/products/p6.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: false,
        price: 175000,
        star: 3,
    },
    {

        id: '3',
        imge: './image/products/p7.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 5,

        takfif: 12,
    },
    {
        id: '4',
        imge: './image/products/p8.png',
        name: 'قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی',
        mogodi: true,
        price: 175000,
        star: 4,
    },
];

export const carts: showCart[] = [
    {
        id: '1',
        name: 'انواع قهوه',
        cap: 'ترکیبی و تک خاستگاه',
        imge: './image/categories/category-right.jpg',
    },
    {
        id: '2',
        name: 'پودر های فوری',
        cap: 'نسکافه ، هات چاکلت ، ماسالا',
        imge: './image/categories/category-left.jpg',
    },
];

export const categories: category[] = [
    {
        id: '1',
        name: 'قهوه دمی و اسپرسو',
        imge: './image/categories/category1.jpg',
    },
    {
        id: '2',
        name: 'لوازم جانبی و تجهیزات',
        imge: './image/categories/category2.jpg',
    },
    {
        id: '3',
        name: 'اسپرسو ساز',
        imge: './image/categories/category3.jpg',
    },
    {
        id: '1',
        name: 'پک تستر قهوه',
        imge: './image/categories/category4.jpg',
    },
    {
        id: '1',
        name: 'قهوه ترک',
        imge: './image/categories/category5.jpg',
    },
];


export const posts: post[] = [

];

export function getChangeLogs(): ChangeLog[] {
    return [
        {
            version: "1.2.0",
            changes: ["Added dark mode support", "Improved performance by 30%", "Fixed navigation issues on mobile devices"],
        },
        {
            version: "1.1.0",
            changes: [
                "Redesigned dashboard interface",
                "Added export to CSV functionality",
                "Fixed bug with date picker component",
            ],
        },
        {
            version: "1.0.0",
            changes: ["Initial release", "Core functionality implemented", "Basic reporting features"],
        },
    ];
};

