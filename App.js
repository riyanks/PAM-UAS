import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Audio} from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/click.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const [keys, setKeys] = useState([]);
  const [hasil, setResult] = useState("");
  let combination = ''
  function result(){
    for (let i = 0; i< keys.length; i++){
      combination = combination + keys[i];
    }
    const fResult = eval(combination);
    setResult('=' + fResult);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>

        <View style={styles.res}>
          <Text style={{color : "white",fontSize: 20, textAlign: 'right', fontWeight: 'bold', marginTop:10 , marginRight:20}}>{keys}</Text>
        </View>

        <View style={styles.counti}>
        <Text style={{color : "white" ,fontSize: 30, textAlign: 'right',  fontWeight: 'bold' ,marginTop:8, marginRight : 20}}>{hasil}</Text>
        </View>

        <View style={styles.container_keys}>
          <TouchableOpacity onPress= {() => (setResult([]), setKeys([]))} style={styles.keys}>
            <Text style={styles.keys_operator}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress= {() => setKeys(keys.slice(0,-1))} style={styles.keys}>
            <Text style={styles.keys_operator}>Del</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress= {() => setKeys([...keys, "%"]) } style={styles.keys}>
            <Text style={styles.keys_operator}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress= {() => setKeys([...keys, "/"]) } style={styles.keys}>
            <Text style={styles.keys_operator}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress= {() => setKeys([...keys, 7])} style={styles.keys}>
            <Text style={styles.angka}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, 8]) } style={styles.keys}>
            <Text style={styles.angka}>8</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress= {() => setKeys([...keys, 9]) } style={styles.keys}>
            <Text style={styles.angka}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, "*"]) } style={styles.keys}>
            <Text style={styles.keys_operator}>x</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress= {() => setKeys([...keys, 4]) } style={styles.keys}>
            <Text style={styles.angka}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, 5]) } style={styles.keys}>
            <Text style={styles.angka}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, 6]) } style={styles.keys}>
            <Text style={styles.angka}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress= {() => setKeys([...keys, "-"]) }style={styles.keys}>
            <Text style={styles.keys_operator}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress= {() => setKeys([...keys, 1]) } style={styles.keys}>
            <Text style={styles.angka}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, 2]) } style={styles.keys}>
            <Text style={styles.angka}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, 3]) } style={styles.keys}>
            <Text style={styles.angka}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, "+"]) }style={styles.keys}>
            <Text style={styles.keys_operator}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress= {() => setKeys([...keys, "0"]) } style={styles.keys}>
            <Text style={styles.angka}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => setKeys([...keys, "."]) } style={styles.keys}>
            <Text style={styles.angka}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (result(), playSound())} style={styles.hasil}>
            <Text style={styles.keys_operator}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444342',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keys: {
    display : "flex",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: "center",
    borderWidth : 1,
    borderColor:"#fff",
    width : 80,
    height :80,
    shadowColor: "#000", 
    borderRadius: 10, 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  container_keys : {
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
   
  },
  keys_operator :{
    fontWeight:"bold",
    fontSize: 30, 
    textAlign: 'center',  
    fontWeight: 'bold',
    color :  "#FF5733",
    
  },
 
  angka :{
    color : "white",
     fontSize: 30, 
     textAlign: 'center',  
     fontWeight: 'bold'
  },
  hasil : {
    display : "flex",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: "center",
    borderWidth : 1,
    borderColor:"#fff",
    color: "white",
    width : 160,
    height :80,
    shadowColor: "#000", 
    borderRadius: 10, 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 out : {
  display : "flex",
    backgroundColor: 'black',
    alignItems: 'right',
    justifyContent: "center",
    borderWidth : 1,
    borderColor:"#fff",
    width : 320,
    height :80,
    shadowColor: "#000", 
    borderRadius: 10, 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
 },
 res :{
  backgroundColor: "#484342",
  height :50,
  width : 320,
  shadowColor: "#000", 
    borderRadius: 10, 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth : 1,

 },
 counti :{
    backgroundColor: "black",
    height :60,
    width : 320,
    shadowColor: "#000", 
    borderRadius: 10, 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  
   },
 }

);

