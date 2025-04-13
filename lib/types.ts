interface date {
    day: string;
    month: string;
    year: string
}

export interface headMenu {
    id: string;
    name: string;
    slug: string;
};

export interface shopMenu {
    id: string;
    name: string;
    slug: string;
};

export interface product {
    id: string;
    imge: string;
    name: string;
    mogodi: boolean;
    price: number;
    star: number;
    takfif ?: number;
};

export interface category {
    id: string;
    name: string;
    imge: string;
};

export interface showCart {
    id: string;
    name: string;
    cap: string;
    imge: string;
};

export interface bigProduct {
    id: string;
    imge: string;
    name: string;
    mogodi: boolean;
    price: number;
    star: number;
    takfif ?: number;
};

export interface post {
    id: string;
    name: string;
    imge: string;
    body: string; // post details
    cap: string;  // in nain page details
    auth: string;
    date: date;
};

export interface ChangeLog  {
    version: string;
    changes: string[];
};

