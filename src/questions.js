

import React, { Component,useState } from 'react';
import { FlatList, Text, StyleSheet,View,TextInput,TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';


// const rowsNewRow = rows[i].newRow

const extractKey = ({newRow}) => newRow

export default function App() {
  
  const[detail,setDetail]=useState([
    {
      id: 0, 
      question: 'text',
      newRow: [
      {id: 0, text: 'View'},
     
      ]
    },
   
    
  ]
  )

  const addData=(index,item)=>{
    let data= Object.assign([],detail,{
      [index]: { ...item,isAdded:true}
    })
     let temp=0;
     if(temp===0){
      data.push( {
     
        question: '',
        newRow: [
        {text: ''},
       
        ]
      })
      setDetail(data); 
    }
  
  
   }

   const addOption=(index,item)=>{
    let datas= Object.assign([],detail.newRow,{
      [index]: { ...item,isAdded:true}
    })
     let temp=0;
     if(temp===0){
      datas.push({newRow:''})
      setDetail(datas); 
    }
  
  
   }

   const deleteData= item =>{
    const deletedata =detail.filter((data,key)=> key != item)
    setDetail(deletedata)
  
   }
  
    renderItem = ({item,index}) => {
      let items = [];
      if( item.newRow) {
        items = item.newRow.map(row => {
          return    <View >
          <Text style={styles.medi}> Option : {index+1}</Text>

          <TextInput
            style={styles.textInput1}
            placeholder="Enter option"
            autoCapitalize="none"
            value={item?.option}
           
            onChangeText={text=>
            setDetail(
              Object.assign([],detail,{
                [index]:  {...item, option:text},
              })
            )}

          > </TextInput>
          <View style={{ alignItems:'flex-end', marginTop:30 }}>
          {detail.length === index+1 ? (
            <View style={{ alignItems:'flex-end'}}>
                          <TouchableOpacity
                            style={styles.button3}
                           onPress={()=>addOption(index,item)}
                            >
                            <Text style={styles.medi1 }>+</Text>
                          </TouchableOpacity></View>
          ):(
            <View style={{ alignItems:'flex-start'}}>
            <TouchableOpacity
                            style={styles.button4}
                            onPress={()=>deleteData(index,item)}
                            >
                            <Text style={styles.medi1 }>- </Text>
                          </TouchableOpacity></View>
          )}
                        </View>

        </View>
        })
      } 

      return (

        <View >
        
        <Text style={styles.medi}>Question : {index+1} </Text>

        <TextInput
          style={styles.textInput1}
          placeholder="Enter question"
          autoCapitalize="none"
          
          value={item?.question}
          onChangeText={text=>
          setDetail(
            Object.assign([],detail,{
              [index]:  {...item, question:text},
            })
          )}

        ></TextInput>

        {items}

<View style={{  marginTop:30 }}>
    {detail.length === index+1 ? (
                    <TouchableOpacity
                      style={styles.button}
                     onPress={()=>addData(index,item)}
                      >
                      <Text style={styles.medi1 }>+ Add Question</Text>
                    </TouchableOpacity>
    ):(
      <TouchableOpacity
                      style={styles.button2}
                      onPress={()=>deleteData(index,item)}
                      >
                      <Text style={styles.medi1 }>- Remove Question</Text>
                    </TouchableOpacity>
    )}
                  </View>
        
      </View>

      

      
      )
    }

  
 
    return (

      <SafeAreaView>
      <ScrollView>
           <View style={styles.view}>
      <View style={styles.main}><Text style={styles.text}>Ouestions</Text></View>
      
      <FlatList
        style={styles.container}
        data={detail}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
    flexDirection: 'column'
  },
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
    width:375,
  
  },
  button3:{
    
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0A4975',
    borderRadius: 5,
    height:40,
    width:165,
  
  },
  button2:{
     
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius: 5,
    height:40,
    width:375,
  },
  button4:{
     
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius: 5,
    height:40,
    width:165,
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