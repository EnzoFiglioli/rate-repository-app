import { Platform } from "react-native";

const platformStyles = Platform.select({
    android:{
        fontFamily: 'Roboto',
    },
    ios:{
        fontFamily: 'Arial',
    },
    default:{
        fontFamily: 'System',
    }
});

export {
    platformStyles
}