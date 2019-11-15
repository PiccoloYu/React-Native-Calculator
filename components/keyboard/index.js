import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

export default class keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.clickNum = this.clickNum.bind(this);
  }


  clickNum(paramValue) {
    this.props.onHandleChild(paramValue)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowstyle}>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, 'mc')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                mc
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, 'm+')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                m+
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, 'm-')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                m-
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, 'mr')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                mr
            </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.rowstyle}>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, 'C')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                C
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '÷')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                ÷
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '*')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                *
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '⇤')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                ⇤
            </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.rowstyle}>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '7')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                7
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '8')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                8
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '9')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                9
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '-')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                -
            </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.rowstyle}>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '4')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                4
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '5')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                5
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '6')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                6
            </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.key} onPress={this.clickNum.bind(this, '+')}>
            <View style={styles.key}>
              <Text style={styles.text}>
                +
            </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.rowbomstyle}>
          <View style={styles.bomview1}>
            <View style={styles.bomviewchile}>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '1')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>1</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '2')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>2</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '3')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>3</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.bomviewchile}>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '%')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>%</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '0')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>0</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback style={styles.bomviewchile_} onPress={this.clickNum.bind(this, '.')}>
                <View style={styles.bomviewchile_}>
                  <Text style={styles.text}>.</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <TouchableNativeFeedback style={styles.bomview2} onPress={this.clickNum.bind(this, '=')}>
            <View style={styles.bomview2}>
              <Text style={styles.text}>=</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rowstyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#cfcfcf',
  },
  rowbomstyle: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#cfcfcf',
    width: '100%',
  },
  key: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0
  },
  bomview1: {
    flex: 3,
    flexDirection: 'column',
  },
  bomview2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bomviewchile: {
    flexDirection: 'row',
    flex: 1,
  },
  bomviewchile_: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 22
  }
})