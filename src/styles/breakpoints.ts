const breakpoints = [375, 576, 768, 992, 1200];

const bp = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const viewports = {
    xs: bp[0],
    sm: bp[1],
    md: bp[2],
    lg: bp[3],
    xl: bp[4],
};
