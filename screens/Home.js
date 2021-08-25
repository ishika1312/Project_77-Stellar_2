import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/space.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>

          <TouchableOpacity 
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
          <Text style={styles.routeText1}>Space Crafts</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage1}></Image>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText2}>Star Maps</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage2}></Image>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText3}>Daily Pictures</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage3}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 333,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Trebuchet MS',
  },
  routeCard: {
    height: 70,
    width: 260,
    marginLeft: 35,
    marginTop: 60,
    borderRadius: 15,
    backgroundColor: '#efeded',
  },
  routeText1:{
    fontSize: 27,
    fontWeight: 'bold',
    color: 'rgb(2, 8, 119)',
    marginTop: 18,
    paddingLeft: 30,
    fontFamily: 'Trebuchet MS',
  },
  routeText2:{
    fontSize: 27,
    fontWeight: 'bold',
    color: 'rgb(2, 8, 119)',
    marginTop: 18,
    paddingLeft: 95,
    fontFamily: 'Trebuchet MS',
  },
  routeText3:{
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgb(2, 8, 119)',
    marginTop: 18,
    paddingLeft: 16,
    fontFamily: 'Trebuchet MS',
  },
  iconImage1:{
    position: 'absolute',
    height: 80,
    width: 80,
    resizeMode: 'contain',
    right: -10,
    top: -10,
  },
  iconImage2:{
    position: 'absolute',
    height: 60,
    width: 80,
    resizeMode: 'contain',
    right: 182,
    top: 5,
  },
  iconImage3:{
    position: 'absolute',
    height: 80,
    width: 80,
    resizeMode: 'contain',
    right: -17,
    top: -8,
  }
});
