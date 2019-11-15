import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from "react-native";
import Keyboard from "./components/keyboard";


let par = '0';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      res: '',
      lastValue: 0,
      symbol: '',
      lastm: '',
      MC: '',
      m: '',
      equal: false
    };
    this.Calculation = this.Calculation.bind(this);
  }

  Calculation(param) {
    const { val, lastValue } = this.state;
    if (param !== '=' && param !== '' && param !== '⇤'
      && param !== 'mc' && param !== 'm-'
      && param !== 'm+' && param !== 'mr') {
      par += param;
      par = par.replace(/\b(0+)/gi, "");
    }
    /**
     * 退格
     */
    if (param === '⇤') {
      par = par.slice(0, par.length - 1);
      if (par.length === 0) {
        par = '0';
        this.setState({
          lastValue: 0
        })
      }
    }
    this.setState({
      val: par
    })
    /**
     * 清除
     */
    if (param === 'C') {
      par = '0'
      this.setState({
        lastValue: 0,
        val: 0
      })
    }

    let re = new RegExp("\\+|\\-|\\*|\\÷|\\=|\\%");
    let re1 = new RegExp("\\+|\\*|\\÷|\\=|\\%");
    let a = '';
    let b = '';
    if (par.match(/^-/)) {
      a = par.substr(1).split(re);
      b = par.substr(1).replace(/[.|0-9]/g, '').split('');
    } else {
      a = par.split(re);
      b = par.replace(/[.|0-9]/g, '').split('');
    }
    if (a.length === 1 && b.length === 0) {
      switch (param) {
        case 'm+':
          this.setState({
            MC: par,
            m: 'm'
          })
          break;
        case 'm-':
          this.setState({
            MC: -par,
            m: '-m'
          })
          break;
        case 'mc':
          this.setState({
            MC: '',
            m: ''
          })
          break;
        case 'mr':
          if (this.state.MC !== '') {
            par += this.state.MC;
            par = par.replace(/\b(0+)/gi, "");
            this.setState({
              val: par
            })
          }
          break;
      }
    }

    let c = par.split('');
    let first = '';
    let second = '';
    let res = '';
    for (let i = 0; i < c.length; i++) {
      if (re.test(c[i]) && re.test(c[i + 1]) || re1.test(c[0])) {
        par = '';
        this.setState({
          val: par,
          lastValue: '0'
        })
        return false
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (par.match(/^-/) && i === 0) {
        a[i] = a[i] * -1;
        first = parseFloat(a[i]);
      } else {
        first = parseFloat(a[i]);
      }
      second = parseFloat(a[i + 1]);
      switch (b[i]) {
        case '+':
          if (isNaN(second)) {
            res = first;
          } else {
            res = first + second;
          }
          break;
        case '-':
          if (isNaN(second)) {
            res = first;
          } else {
            res = first - second;
          }
          break;
        case '÷':
          if (isNaN(second)) {
            res = first;
          } else {
            res = first / second;
          }
          break;
        case '*':
          if (isNaN(second)) {
            res = first;
          } else {
            res = first * second;
          }
          break;
        case '%':
          res = first / 100;
          if (!isNaN(second)) {
            res = res * second
          }
          break;
      }
      a[i + 1] = res;
      this.setState({
        lastValue: res
      })
    }

    if (param === '=') {
      this.setState({
        equal: true,
        val: res,
        lastValue: 0
      })
      par = res;
    } else {
      this.setState({
        equal: false
      })
    }

  }

  render() {
    const { val, lastValue, m } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.mc}>
            <Text style={styles.mctext}>{m}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text1}>{val}</Text>
          </View>
          <View style={styles.textView1}>
            <Text style={styles.text2}>{lastValue} </Text>
          </View>
        </View>
        <View style={styles.container3}>
          <Keyboard onHandleChild={this.Calculation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  container3: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%'
  },
  textInputStyle: {
    width: '100%',
    height: '100%',
    // 设置背景颜色
    backgroundColor: '#fff'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  textView: {
    flex: 3,
    fontSize: 30,
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column-reverse"
  },
  textView1: {
    flex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mc: {
    flex: 1,
  },
  text1: {
    width: '100%',
    textAlign: 'right',
    fontSize: 30,
    alignItems: 'flex-end'
  },
  text2: {
    width: '100%',
    textAlign: 'right',
    bottom: 0
  }
});