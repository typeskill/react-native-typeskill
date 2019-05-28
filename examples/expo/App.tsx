
import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, SafeAreaView, Platform, StatusBar } from 'react-native'
import Toolbar from './src/Toolbar'
import { Bridge, Sheet } from 'react-native-typeskill'
import { Constants } from 'expo'

interface Props {}

// @see: https://github.com/facebook/react-native/issues/9599
if (typeof (global as any).self === 'undefined') {
  (global as any).self = global
}

const themeColor = '#ffffff'

export default class App extends Component<Props> {
  private bridge: Bridge
  constructor(props: Props) {
    super(props)
    this.bridge = new Bridge()
  }

  render() {
    const innerInterface = this.bridge.getInnerInterface()
    const outerInterface = this.bridge.getOuterInterface()
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container} >
          <KeyboardAvoidingView style={{ flex: 1 }} enabled>
            <Sheet bridgeInnerInterface={innerInterface} />
            <Toolbar contentContainerStyle={{ backgroundColor: '#eaf0fc', elevation: 100 }} bridgeOuterInferface={outerInterface} />
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: themeColor,
    position: 'relative'
  },
  statusBar: {
    height: Constants.statusBarHeight
  }
})
