import type {Site, Page,ContactDetails, Links } from "@/config/types";
import { siInstagram, siDribbble, siBehance, siX } from "simple-icons/icons";

export const SITE: Site = {
    title: "نقرات للتسويق الرقمي",
    description: "وكالة تسويق رقمي سعودي",
    baseURL: "https://bysalem.me",
    bio: "   نحن وكالة تسويق سعودية رائدة في تقديم خدمات التسويق الإلكتروني. نسعى جاهدين لمساعدة شركائنا في تحقيق النجاح المستمر من خلال تقديم حلول تسويقية شاملة ومبتكرة تعزز نتائج مشاريعهم.",
    author: "علي البن صالح",
}

export const PORTFOLIO: Page = {
    title: "المشاريع",
    description: "معرض أعمالي في تصميم الجرافيك وتطوير الويب", 
    baseURL: "/portfolio",
}

export const SERVICES: Page = {
    title: "الخدمات",
    description: "خدمات التصميم والتطوير التي أقدمها", 
    baseURL: "/services",
}

export const BLOGS: Page = {
    title: "المدونة", 
    description: "مقالات وأفكار حول التصميم والتقنية",
    baseURL: "/blogs",
}

export const CONTACT: Page = {
    title: "تواصل معي", 
    description: "طرق التواصل والعمل معًا",
    baseURL: "/contact",
}


export const CONTACTS: ContactDetails = {
email: "contact@bysalem.me",
phone: "775657617",
whatsapp: "+967775657617",
whatsappText: "تواصل معي",
address: "Cairo",
}

export const NAVLINKS: Links = [
    {
        text: "الرئيسية",
        href: "/",
        external: false
    },
     {
        text: "الخدمات",
        href: "#services",
        external: false 
    },
 {
        text: "المميزات",
        href: "#features",
        external: false 
    },
     {
        text: "تواصل",
        href: "/contact",
        external: false 
    },
]

export const SOCIALLINKS: Links = [
    {
        text: "Instagram",
        icon: siInstagram, 
        href: "https://instagram.com/yourprofile", 
        ariaLabel: "See My profile on instagram",
        external: true
    },
    {
        text: "Dribbble",
        icon: siDribbble,
        href: "https://dribbble.com/yourprofile",
        ariaLabel: "See My profile on Dribbble",
        external: true
    },
    {
        text: "Behance",
        icon: siBehance,
        href: "https://behance.net/yourprofile",
        ariaLabel: "See My profile on Behance",
        external: true
    },
    {
        text: "X",
        icon: siX,
        href: "https://x.com/yourprofile",
        ariaLabel: "check my tweets on X",
        external: true
    }
];