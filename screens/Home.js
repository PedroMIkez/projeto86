import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style = {styles.titleText}>Página Inicial</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: { 
        flex: 1,
      },
    //Estilizando o titulo :)
    titleText: { 
    marginTop:50, 
    fontSize:40,
    fontWeight:'bold',
    color:'red',
    }
})