const size = {
    mobileXXS: '320px',
    mobileXS: '375px',
    mobileS: '425px',
    tabletM: '768px',
    laptopL: '1024px',
    laptopXL: '1440px',
    desktopXXL: '1800px'
}

const breakpoint = {
    mobile320: `(max-width: ${size.mobileXXS})`,
    mobile375: `(max-width: ${size.mobileXS})`,
    mobile425: `(max-width: ${size.mobileS})`,
    tablet768: `(max-width: ${size.tabletM})`,
    laptop1024: `(min-width: ${size.laptopL})`,
    laptop1440: `(min-width: ${size.laptopXL})`,
    desktop1800: `(min-width: ${size.desktopXXL})`
};

export default breakpoint