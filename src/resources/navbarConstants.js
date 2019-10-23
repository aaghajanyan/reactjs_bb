export let links = {
    leftPart: [
        { label: 'Workout', link: '#workout', active: true, isBtn: "false", className: "nav-item"},
        { label: 'Nutrition', link: '#nutrition', isBtn: "false", className: "nav-item" },
        { label: 'Blog', link: '#blog', isBtn: "false", className: "nav-item" },
        { label: 'Pricing & Plans', link: '#pricing', isBtn: "false", className: "nav-item" }
    ],
    rightPart: [
        {label: 'Help', link: '#help', isBtn: "false", className: "nav-item" },
        {label: 'Community', link: '#community', isBtn: "false", className: "nav-item" },
        {label: 'Shop', link: '#shop', isBtn: "false", className: "nav-item" }
    ],
    rightPartBtn: [
        {label: 'JOIN NOW', link: '#joinNow', isBtn: "true", className: "nav-item btn-item signup-btn" },
        {label: 'LOG IN', link: '#login', isBtn: "false", className: "nav-item btn-item login-btn" }
    ]
};

export let NavBarConstants = {
    logoSrc: "https://www.thejoyplan.com/wp-content/uploads/2017/07/beachbody.png"
}