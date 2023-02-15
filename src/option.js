
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, FlatList, Touchable, TouchableOpacity, SectionList, } from 'react-native';
const App = () => {
  const [Index, setIndex] = useState(null);
  const [details, setDetails] = useState([
    { question: '', options: [{ option: '' }], isadded: false },]);

  const addQuestion = (index, item) => {
    let data = Object.assign([], details, {
      [index]: { ...item, isAdded: true },
    });

    let temp = 0;
    if (temp === 0) {
      data.push({ question: '', options: [{ option: '' }], isadded: false });
      setDetails(data);
    }
  };
  const addOption = ( outerindex) => {

    let options = details[outerindex].options;
    options.push({ option: '' });

    let result = details.map((item, id) => {
      if (id == outerindex) {
        item = { ...item, option: options };
      }
      return item;
    });

    setDetails(result);
  };



  const deleteQuestion= item =>{
    const deletedata =details.filter((data,key)=> key != item)
    setDetails(deletedata)
  
   }
   
  return (
    <>
      <View
        style={{
          flex: 0.1,
          alignItems: 'center',
          backgroundColor:'#0A4975',
          color:'white'
        }}>
        <Text style={{ fontSize: 40, fontWeight: '600', }}>
          Questions
        </Text>
      </View>
      <View style={{ flex: 1}}>
        <FlatList
          data={details}
          keyExtractor={(item, index) => {
            var Index = index;
            setIndex(index);
            return index.toString();
          }}
          renderItem={({ item, index }) => {
            return (
              <View>
                <View
                  style={{
                    borderWidth: 2,
                    padding: 5,
                  }}>
                  <Text style={{ fontSize: 30, marginLeft: 10 }}>
                    Question : {index + 1}
                  </Text>
                  <TextInput
                    style={{
                      padding: 7,
                      margin: '2%',
                      fontSize: 16,
                      fontWeight: '400',
                      borderRadius: 2,
                      borderWidth: 1,
                    }}
                    placeholder="Enter Question"></TextInput>
                  <View>
                    <FlatList
                      data={details[index].options}
                      renderItem={({ item, index }) => {
                        return (
                          <View>
                            <Text style={{ fontSize: 30, marginLeft: 10 }}>
                              Option : {index + 1}
                            </Text>
                            <TextInput
                              style={{
                                padding: 7,
                                margin: '2%',
                                fontSize: 16,
                                fontWeight: '400',
                                borderRadius: 2,
                                borderWidth: 1,
                                width: '70%'
                              }}
                              placeholder='enter Option'></TextInput>
                           
                        
                              <TouchableOpacity
                              style={{
                                alignItems: 'center',
                                justifyContent:'center',
                                backgroundColor: '#0A4975',
                                borderRadius: 5,
                                height:40,
                                width:'30%',
                              }}
                              onPress={() =>
                                addOption(index, item, Index)
                              }>
                              <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
                            </TouchableOpacity>

                            
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
                {details.length === index+1 ? (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent:'center',
                    backgroundColor: '#0A4975',
                    borderRadius: 5,
                    height:50,
                    width:'100%',
                    
                  }}
                  onPress={() => addQuestion(index, item)}>
                  <Text style={{ color:'white', fontSize: 30 }}>Add Question</Text>
                </TouchableOpacity>
                ):(
                  <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent:'center',
                    backgroundColor: 'red',
                    borderRadius: 5,
                    height:40,
                    width:'100%',
                  }}
                  onPress={() => deleteQuestion(index, item)}>
                  <Text style={{ color: 'white', fontSize: 30 }}>Remove Question</Text>
                </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>
    </>
  );
};
export default App;

