import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home(){
    return(
        <View style={s.container}>
            <ImageBackground 
                source={require('../assets/images/bg.png')} 
                resizeMode="cover" 
                style={s.image}>

                <TouchableOpacity style={s.btn} onPress={() => router.push('/cards')}>
                  <Text style={s.btnText}>ENTRAR</Text>
                </TouchableOpacity>  

            </ImageBackground>
        </View>
    )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  btn:{
    width: 321,
    height: 69,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 500,
    borderRadius: 10
  },
  btnText:{
    fontWeight: 'bold',
    fontSize: 40,
    color: '#134C96',
  }
})