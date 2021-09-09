import React from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
    
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <Image
        style={{width: '100%', height: '100%'}}
        source={{
          uri: 'https://images.pexels.com/photos/6205448/pexels-photo-6205448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View style={{alignItems: 'center', padding: 9}}>
          <Text
            style={{
              color: '#3A3C40',
              fontSize: 65,
              marginTop: 25,
              textShadowColor: 'rgba(255, 255, 255, 1)',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 9,
              fontWeight: 'bold',
            }}>
            find love
          </Text>
          <Text
            style={{
              color: '#3A3C40',
              fontSize: 20,
              marginTop: 55,
              textShadowColor: 'rgba(255, 255, 255, 1)',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 5,
              fontWeight: 'bold',
            }}>
            through centers of #interest
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View
          style={{
            position: 'absolute',
            marginTop: 550,
            width: 200,
            height: 65,
            backgroundColor: '#3A3C40',
            alignSelf: 'center',
            borderRadius: 20,
            elevation: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              padding: 9,
              alignSelf: 'center',
            }}>
            # Let's Go
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

