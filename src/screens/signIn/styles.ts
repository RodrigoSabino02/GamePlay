import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 350,
    },

    context: {
        marginTop: -70,
        paddingHorizontal: 50,
    },

    title: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 35,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },

    subtitle: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 15,
        marginTop: -30,
        marginBottom: 40,
        fontFamily: theme.fonts.text500,
        lineHeight: 25
    }
})