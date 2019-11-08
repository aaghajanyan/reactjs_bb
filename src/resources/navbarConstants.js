export const navBarItems = {
    primaryNav: [
        { label: "Workout", link: "programs", active: true, isBtn: false, className: "nav-bar__link-item"},
        { label: "Nutrition", link: "nutrition", isBtn: false, className: "nav-bar__link-item" },
        { label: "Blog", link: "blog", isBtn: false, className: "nav-bar__link-item" },
        { label: "Pricing & Plans", link: "plans", isBtn: false, className: "nav-bar__link-item" }
    ],
    secondaryNav: [
        { label: "Help", link: "help", isBtn: false, className: "nav-bar__link-item" },
        { label: "Community", link: "community", isBtn: false, className: "nav-bar__link-item" },
        { label: "Shop", link: "shop", isBtn: false, className: "nav-bar__link-item" }
    ],
    authNav: [
        { label: "JOIN NOW", link: "joinNow", isBtn: true, className: "nav-bar__link-item nav-bar__btn-item nav-bar__signup-btn" },
        { label: "LOG IN", link: "login", isBtn: false, className: "nav-bar__link-item nav-bar__btn-item nav-bar__login-btn" }
    ],
    bottomPart: [
        { label: "Trainers", link: "#trainer", active: true, isBtn: "false", className: "footer-nav-bar__item"},
        { label: "How It Works", link: "#how-works", isBtn: "false", className: "footer-nav-bar__item" },
        { label: "Contact Us/FAQ", link: "#contact", isBtn: "false", className: "footer-nav-bar__item" },
        { label: "Terms of Use", link: "#terms", isBtn: "false", className: "footer-nav-bar__item" },
        { label: "Privacy", link: "#privacy", isBtn: "false", className: "footer-nav-bar__item" }
    ],
    logoSrc: "https://www.thejoyplan.com/wp-content/uploads/2017/07/beachbody.png"
};