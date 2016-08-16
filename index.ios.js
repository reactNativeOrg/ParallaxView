/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var ParallaxView = require('react-native-parallax-view');

var HEADER = React.createClass({
render() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>
          Header
        </Text>
    </View>
  )
}

})

class ParallaxRN extends Component {
  render() {
    return (

      <ParallaxView
        backgroundSource={{ uri: "http://i.imgur.com/mEVXC36.jpg" }}
        windowHeight={300}
        header={<HEADER />}
        scrollableViewStyle={{ backgroundColor: 'skyblue' }}
      >
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
        <Text style={styles.loremText}>
         Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
         cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
         Populo nemore qualisque vis te, at numquam persequeris duo.
       </Text>
       <Text style={styles.loremText}>
         Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
         volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
         feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
         an vim, ne qui mazim definitiones reprehendunt.
       </Text>
       <Text style={styles.loremText}>
         No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
         mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
         abhorreant sententiae id ius.
       </Text>
       <Text style={styles.loremText}>
         Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
         volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
         feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
         an vim, ne qui mazim definitiones reprehendunt.
       </Text>
       <Text style={styles.loremText}>
         No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
         mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
         abhorreant sententiae id ius.
       </Text>
       <Text style={styles.loremText}>
         Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
         volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
         feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
         an vim, ne qui mazim definitiones reprehendunt.
       </Text>
       <Text style={styles.loremText}>
         No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
         mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
         abhorreant sententiae id ius.
       </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!!!!!
        </Text>
      </View>
    </ParallaxView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'flex-end',
     paddingHorizontal: 20,
     paddingVertical: 24
 },
 headerText: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#353535'
 },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ParallaxRN', () => ParallaxRN);
