import React, {useState,useEffect} from 'react';
import {View,Image,Text,ScrollView} from 'react-native';
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  let getData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return( 
   <ScrollView>
          {data.map((e, i) => (
            <View key={i}>
              <View  style={{ maxWidth: 345 }}>
                  <Image source={{uri: e.image}} style={{width: 50, height: 50}}  />              
                  <Text title={e.title}>
                    <Text
                      style={{ height:60, overflow: 'hidden', fontSize:18 }}
                      
                    >
                      {e.title.slice(0, 30) +
                        (e.title.length > 30 ? "..." : "")}
                    </Text>
                  </Text>
                  <Text>{e.category}</Text>
                  <Text style={{ fontSize: 16 }}>
                    Rs {e.price}/-
                  </Text>
                
              </View>
            </View>
          ))}

</ScrollView>
  );
};

export default App;
