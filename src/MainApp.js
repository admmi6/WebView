import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import Browser from './BrowserView'

class MainApp extends Component {

  state = {
    links: [
      {title:'Tokopedia', url: 'https://www.tokopedia.com'},
       {title:'Google', url: 'https://www.google.com/'},
       {title:'Gmail', url: 'https://www.google.com/gmail'},
      ],
  };

  onPressButton(url) {
    this.refs.navigator.push({ url });
  }

  renderButton = (btn, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onPressButton(btn.url)}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Browser url={route.url} navigator={navigator} />
      );
    }

    return (
      <View style={styles.content}>
        <Text>Home</Text>
        <View>
          {this.state.links.map(this.renderButton)}
        </View>
      </View>
    );
  }

  render(){
    return(
      <Navigator
          ref="navigator"
          renderScene={this.renderScene}
          initialRoute={{}}
          configureScene={(route) => (
            Navigator.SceneConfigs.FloatFromBottom
          )}
        />
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    margin: 10,
    backgroundColor: '#B39DDB',
    borderRadius: 3,
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,

  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,

  },
});

export default MainApp;
