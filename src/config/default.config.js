import { FaLinkedin, FaGithub } from "react-icons/fa"

export const BRAND_NAME = 'Web GPT';
export const BRAND_DESCRIPTION = "Some Desc";
export const LOGO_PATH = "../../images/logo.png";

export const HEADER_CONFIG = {
    position: "fixed", // fixed, normal
    customNav: false,
    isNavbarLeft: false,
    height: 80
    // bgColor: "#2c6bcc",
    // textColor: "#f2f2f2",
};

export const FOOTER_CONFIG = {
    // description: "",
    // isFootNavigation: "",
    // isSocial: "",
    // isSubFooter: "",
    // isCredits: "",
    // bgColor: "#f2f2f2",
    // borderColor: "#f2f2f2",
    // border: "#f2f2f2",
    copyrightInfo: "All Rights Reserved",
    textColor: "",
    minHeight: "",
    subFooterBgColor: "",
    subFooterTextColor: "",
    creditInfo: <>Made with ❤️ <br /> using React Components</>,
    socialLinksConfig: {
        color: "#bdbdbd"
    }
};

export const SOCIAL_LINKS = [
    {
        link: "https://www.linkedin.com/in/mrunalmodi/",
        icon: <FaLinkedin />,
        label: "LinkedIn"
    },
    {
        link: "https://github.com/mrunal-modi",
        icon: <FaGithub />,
        label: "GitHub"
    }
];

export const VIEWS = [{
    "path": "/",
    "navbarLinkLabel": "Home",
    "order": 1,
    "data": {},
    "view": {
        "section-banner": {
            "component": "Banner",
            "img": "/images/Mrunal-Image.jpeg",
            // "supTitle": "Mrunal Modi",
            "title": "Mrunal Modi",
            "subtitle": "Enterprise Solutions Engineer",
            "text": "15+ years consulting experience architecting and operationalizing enterprise IT storage architectures along with integrating them into large-scale production applications across Hybrid MultiCloud.",
            "actionButtons": [
                {
                    "label": "Hire",
                    "href": "#section-contact-us",
                    // "style": {"width": 400}
                },
                {
                    "label": "Services",
                    "href": "#section-list-cards",
                    // "style": {"width": 400}
                }
            ],
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
            // "setImageAsBackground": true,
            // "rtl": true 
        },
        // "section-text-image": {
        //     "component": "TextImage",
        //     "img": "/images/skills.png",
        //     "title": "Current Skills",
        //     "description": "These areas are self assessed.",
        //     "rtl": true,
        //     "bgColor": "#FFFFFF",
        //     "textColor": "#000",
        // },
        // "section-text": {
        //     "component": "Text",
        //     "description": "mm",
        //     "title": "Text",
        //     "rtl": true,
        //     // "bgColor": "#f2f2f2",
        //     // "textColor": "#000",
        // },
        "section-list-cards": {
            "component": "ListCards",
            "sectionTitle": "Areas",
            "cardInfo": [
                {
                    "title": "Digital Transformation",
                    "img": "/images/digi-transform.png",
                    "description": "We combine strategic insights with digital know-hows to help you formulate new business models, modernize your legacy systems and create your market-ready digital products and platforms.",
                },
                {
                    "title": "Product Development",
                    "img": "/images/product-dev.png",
                    "description": "Consumers hunger for more. We research and create new technology solutions based on your business challenges and turn them into brand-new marketable products.",
                },
                {
                    "title": "Innovation & Technology",
                    "img": "/images/technology.png",
                    "description": "We help businesses embrace disruptive technologies so they can drive innovative growth from within and transition better long-term alongside surrounding mature digital organizations. We will help you start small and scale fast.",
                }
            ],
            "bgColor": "#FFFFFF",
            "textColor": "#000",
        },
        "section-contact-us": {
            "component": "ContactForm",
            "sectionTitle": "Contact",
            // "bgColor": "#f2f2f2",
            // "textColor": "#000",
        }
    }
}];