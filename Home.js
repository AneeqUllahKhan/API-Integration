import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {Card, SearchBar} from '@rneui/themed';
import styling from './Styling';
import logo from './assets/logo.png';


const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  let getData = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  let move = e => {
    navigation.navigate('Details', e);
  };

  useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
}

  return (
    <View style={[styling.bgWhite, styling.h100]}>
      <View>
        <Image source={logo} resizeMode="cover" style={styles.images} />
        <View style={styles.color}>
          <SearchBar
            style={styles.view}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          />
        </View>
      </View>

      <View style={[{flex: 6}]}>
        <ScrollView>
          <View
            style={[
              styling.flexRow,
              styling.flexWrap,
              styling.justifyContentBetween,
            ]}>
            {data.map((e, i) => (
              <TouchableOpacity
                style={[styling.m1, styling.rounded, {width: '44.3%'}]}
                onPress={() => move(e)}
                key={i}>
                <Card style={{width: '45%'}}>
                  <Image
                    resizeMode="cover"
                    source={{uri: e.image}}
                    style={[styles.image, styling.rounded]}
                  />
                  <Card.Title numberOfLines={1} style={styling.fs4}>
                    {e.title}
                  </Card.Title>
                  <Text>{e.category}</Text>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    Rs {e.price}
                  </Text>
                  <Text>Sold {e.rating.count}</Text>
                  <View style={styling.py1}>
                    <Text>
                      {e.rating.rate}
                      <Icon color="golden" size={20} name="star" />
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
  },
  images: {
    marginTop: 5,
    marginBottom: 5,
    width: '50%',
    height: 50,
  },
  view:{
    backgroundColor:'white',
  },
  color:{
    backgroundColor:'white',
    margin:0,
  }
});
