import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#3168d5",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
        },
        text: {
            primary: "#000000",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#373e3d",
        },
        background: {
            default: "#121212",
            paper: "#373e3d",
        },
        text: {
            primary: "#373e3d",
        },
    },
});
