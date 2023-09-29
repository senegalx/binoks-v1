/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#B9D660",
        customSecondary: "#B9D662",
        customDarkBg1: "#000044",
        customDarkBg2: "#040450",
        customDarkBg3: "#131361",
        customDarkBg3Hover: "#21215F",
        customContentSubtitle: "#fff",
        customGrayBorder: "#131361",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(33, 33, 95, 0.7)",
        customDarkBgTransparentDarker: "rgb(1,1,58,0.5)",
        customDarkBgTransparentLighter: "rgb(45, 45, 105, 0.7)"  
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};

