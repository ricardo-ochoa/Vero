import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    colors: {
        primary: theme.colors["purple"],
        secondary: theme.colors["purple.200"],
    },
    styles: {
        global:{
            body: {
                backgroundColor: "gray.50",
            },
        },
    },

});