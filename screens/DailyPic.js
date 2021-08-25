import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Daily Pic Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})