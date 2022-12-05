import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {Card} from '@rneui/themed';
import styling from './Styling';

const Details = ({navigation, route}) => {
  console.log(route.params);
  return (
    <>
      <ScrollView>
        <View>
          <View>
            <Card>
              <Image
                resizeMode="cover"
                source={{uri: route.params.image}}
                style={[styles.image, styling.rounded]}
              />
              <Card.Divider />
              <Card.Title numberOfLines={3} style={styling.fs4}>
                {route.params.title}
              </Card.Title>
              <Text>{route.params.category}</Text>
              <Text style={{fontSize: 18, color: 'black'}}>
                Rs {route.params.price}
              </Text>
              <Text>{route.params.description}</Text>
              <Text>
                {route.params.rating.rate}
                <Icon color="golden" size={20} name="star" />
              </Text>
            </Card>
          </View>
          <Card style={{height: '500%'}}>
            <View>          
              <Card.Title numberOfLines={3} style={styling.fs4}>
                {route.params.title}
              </Card.Title>
              <Text>Sold {route.params.rating.count}</Text>
              <View style={styling.py1}>
                <Text>{route.params.description}</Text>
                <Text>
                  {route.params.rating.rate}
                  <Icon color="golden" size={20} name="star" />
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    marginTop: 2,
    width: '60%',
    height: '50%',
    marginLeft: 50,
    marginBottom: 23,
    marginRight: 50,
  },
});
