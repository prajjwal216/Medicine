import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'


export default function App() {
const[detail,setDetail]=useState([
  {medicineName:'',frequency:'',duration:'',isadded:false}
])
 
 const addData=(index,item)=>{
  let data= Object.assign([],detail,{
    [index]: { ...item,isAdded:true}
  })
   let temp=0;
   if(temp===0){
    data.push({medicineName:'',frequency:'',duration:'',isadded:false})
    setDetail(data); 
  }


 }
 const deleteData= item =>{
  const deletedata =detail.filter((data,key)=> key != item)
  setDetail(deletedata)

 }
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.view}>
      <View style={styles.main}><Text style={styles.text}>Order Medicine</Text></View>
      
      <FlatList
        data={detail}
        renderItem={({item,index}) => {
          return (
            <View style={styles.page}>

            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
    
              <View style={{ flex: 0.5, marginRight: 50 }}>
                <Text style={styles.medi}>Medicine Name</Text>
    
                <TextInput
                  style={styles.textInput1}
                  placeholder="Enter name"
                  autoCapitalize="none"
                  
                  value={item?.medicineName}
                  onChangeText={text=>
                  setDetail(
                    Object.assign([],detail,{
                      [index]:  {...item, medicineName:text},
                    })
                  )}
    
                ></TextInput>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.medi}>Frequency</Text>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Enter Frequency"
                  autoCapitalize="none"
                  keyboardType = 'numeric'
                  value={item?.frequency}
                  onChangeText={text=>
                  setDetail(
                    Object.assign([],detail,{
                      [index]:  {...item, frequency:text},
                    })
                  )}
    
                ></TextInput>
              </View>
            </View>
    
     <View style={{  flexDirection: 'row', paddingHorizontal: 10,marginTop:10 }}>
    
    <View style={{ flex: 0.5, marginRight: 50 }}>
      <Text style={styles.medi}>Duration</Text>
    
      <TextInput
        style={styles.textInput1}
        placeholder="Enter Duration"
        autoCapitalize="none"
        keyboardType = 'numeric'
        value={item?.duration}
        onChangeText={text=>
        setDetail(
          Object.assign([],detail,{
            [index]:  { ...item, duration:text},
          })
        )}
    
      ></TextInput>
    </View>
   
    <View style={{ flex: 0.5, marginTop:30 }}>
    {detail.length === index+1 ? (
                    <TouchableOpacity
                      style={styles.button}
                     onPress={()=>addData(index,item)}
                      >
                      <Text style={styles.medi1 }>+ Add More</Text>
                    </TouchableOpacity>
    ):(
      <TouchableOpacity
                      style={styles.button2}
                      onPress={()=>deleteData(index,item)}
                      >
                      <Text style={styles.medi1 }>- Remove</Text>
                    </TouchableOpacity>
    )}
                  </View>
    </View>
    
          </View>
          );
        }}
      />
      
 
    
     
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  textInput: {

    padding: 7,
    margin: '2%',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 1,
  },
  textInput1: {
    marginTop:5,
    padding: 7,
    height: 40,
    width: '100%',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 1,
  },
  view: {
    flex: 1,
    
  },
  main: {
    flex: 0.15,
    backgroundColor: '#0A4975',
  },
  button:{
    
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0A4975',
    borderRadius: 5,
    height:40,
    width:163,
  
  },
  button2:{
     
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius: 5,
    height:40,
    width:163,
  },
 
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    alignSelf: 'center',
    marginTop: 15
  },
  page: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical:5,
    borderWidth:2,
    borderColor:'#0A4975',
    height:170
    
    
    
  },
  medi: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'black'
  },
  medi1: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'white'
  }
})




