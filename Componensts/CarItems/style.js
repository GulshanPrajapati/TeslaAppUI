import { StyleSheet  } from "react-native";


const styles = StyleSheet.create({
    carcontainer: {
        width : "100%",
        height : "100%",
        backgroundColor : "orange"
    },
    header : {
        marginTop : 50,
        marginLeft : 20,
        marginRight : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        marginBottom : 10,
        alignItems : "center"
        
    },
    headerTitle: {
        color : "white",
        fontSize : 16,
        fontWeight : "bold",
        justifyContent : "center",
        alignItems : "center"
    },
    BackgroundImage: {
        width : "100%",
        height : "100%",
        resizeMode : "cover",
        position : "absolute"
    },
    batterySection :{
        flexDirection: "row",
        justifyContent : "center",
        alignItems: "center"
    },
    batteryImage:{
        height:26,
        width: 70,
        marginRight: 12
    },
    batteryText:{
        color:"white",
        fontSize: 35,
        fontWeight: "bold"
    },
    statusSection:{
        alignItems: "center"
    },
    statusText:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        marginTop: 8
    },
    controlSection:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop: 175
    },
    controlButton:{
        borderWidth:1,
        borderColor: "white",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25
    }
})

export default styles;