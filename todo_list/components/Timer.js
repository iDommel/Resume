import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Timer extends Component {

    state = {
        running: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
        currentTime : null,
    }

    renderStartButton = () => {
        return (
            <Button
                title="Start"
                onPress={this.onStart}
                />
        )
    }

    renderPauseButton = () => {
        return (
            <Button
                title="Pause"
                onPress={this.onPause}
                />
        )
    }

    renderResetButton = () => {
        return (
            <Button
                title="Reset"
                onPress={this.onReset}
                />
        )
    }

    onStart = () => {
        if (this.state.running == false) {
            this._interval = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds + 1,
                })
            }, 1000);
            this.setState({running: true});
        }
    }

    onReset = () => {
        this.setState({
            second: 0,
            minutes: 0,
            hours: 0,
            running: false,
        });
        clearInterval(this._interval);
    }

    onPause = () => {
        this.setState({running: false});
        clearInterval(this._interval);
    }

    addZero = (time) => {
        return ((time < 10 ? '0' + time : time))
    }

    getCurrentTime = () => {
        if (this.state.seconds > 59) {
            this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1,
                })
        }
        if (this.state.minutes > 59) {
            this.setState({
                        minutes: 0,
                        hours: this.state.hours + 1,
            })
        }
        return (
            this.addZero(this.state.hours) + ' : '
            + this.addZero(this.state.minutes) + ' : '
            + this.addZero(this.state.seconds)
        )
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>{this.getCurrentTime()}</Text>
                <View style={styles.buttonWrapper}>
                    {this.renderStartButton()}
                    {this.renderPauseButton()}
                    {this.renderResetButton()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  text: {
      textAlign: 'center',
      padding: 30,
      color: '#fff',
      fontSize: 50,
  },
  buttonWrapper: {
      flexDirection: 'row',
      paddingHorizontal: 5,
      width: '100%',
      justifyContent: 'space-around'
  }
});