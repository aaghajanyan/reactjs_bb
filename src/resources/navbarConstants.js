export const navBarItems = {
    primaryNav: [
        { label: "Workout", link: "#workout", active: true, isBtn: "false", className: "nav-bar__link-item"},
        { label: "Nutrition", link: "#nutrition", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Blog", link: "#blog", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Pricing & Plans", link: "#pricing", isBtn: "false", className: "nav-bar__link-item" }
    ],
    secondaryNav: [
        { label: "Help", link: "#help", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Community", link: "#community", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Shop", link: "#shop", isBtn: "false", className: "nav-bar__link-item" }
    ],
    authNav: [
        { label: "JOIN NOW", link: "#joinNow", isBtn: "true", className: "nav-bar__link-item nav-bar__btn-item nav-bar__signup-btn" },
        { label: "LOG IN", link: "#login", isBtn: "false", className: "nav-bar__link-item nav-bar__btn-item nav-bar__login-btn" }
    ]
};

export const navBarConstants = {
    logoSrc: "https://www.thejoyplan.com/wp-content/uploads/2017/07/beachbody.png"
}