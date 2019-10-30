export let links = {
    leftPart: [
        { label: "Workout", link: "#workout", active: true, isBtn: "false", className: "nav-bar__link-item"},
        { label: "Nutrition", link: "#nutrition", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Blog", link: "#blog", isBtn: "false", className: "nav-bar__link-item" },
        { label: "Pricing & Plans", link: "#pricing", isBtn: "false", className: "nav-bar__link-item" }
    ],
    rightPart: [
        {label: "Help", link: "#help", isBtn: "false", className: "nav-bar__link-item" },
        {label: "Community", link: "#community", isBtn: "false", className: "nav-bar__link-item" },
        {label: "Shop", link: "#shop", isBtn: "false", className: "nav-bar__link-item" }
    ],
    rightPartBtn: [
        {label: "JOIN NOW", link: "#joinNow", isBtn: "true", className: "nav-bar__link-item nav-bar__btn-item nav-bar__signup-btn" },
        {label: "LOG IN", link: "#login", isBtn: "false", className: "nav-bar__link-item nav-bar__btn-item nav-bar__login-btn" }
    ]
};

export let NavBarConstants = {
    logoSrc: "https://www.thejoyplan.com/wp-content/uploads/2017/07/beachbody.png",
    closeIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="
}