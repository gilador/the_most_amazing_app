import React, {Component} from 'react';
import {Button, Text, View, Image} from 'react-native';

export default class App extends Component<{}> {

    state = {lastTime: 0, timeDiff: TIME_DIFF_START};

    render() {
        return (
            <View style={{
                alignItems: 'center',
                flex: 1,
            }}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    source={{uri: 'http://backgrounddownload.com/wp-content/uploads/2018/09/background-hacker-gif-3.gif'}}/>


                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    marginTop: 200
                }}>
                    <Button title='Hit It!'
                            color='#12cc05'
                            onPress={() => this.evalTime()}/>
                    <Text style={{
                        textAlignVertical: "center",
                        textAlign: 'center',
                        color: '#12cc05',
                        fontWeight: 'bold',
                        fontSize: 20,
                        borderColor: '#12cc05',
                        borderWidth: 2,
                        flexWrap: 'wrap',
                        height: 50,
                        width: 300,
                        marginTop: 40
                    }}>
                        {this.state.timeDiff}
                    </Text>
                </View>
            </View>
        );
    }

    evalTime() {
        let now = new Date();
        this.setState({lastTime: now});
        let prettyDiff = this.parseDate(now);

        if (this.state.timeDiff != TIME_DIFF_START) {
            let diff = now.getTime() - this.state.lastTime

            prettyDiff = this.convertToString(diff)
        }

        this.setState({timeDiff: prettyDiff});

    }

    convertToString(ms) {
        const showWith0 = value => (value < 10 ? `0${value}` : value);
        const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
        const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
        const seconds = showWith0(Math.floor((ms / 1000) % 60));
        return `${parseInt(hours) ? `${hours}${DELIM}` : ""}${minutes}${DELIM}${seconds}`;
    }

    parseDate(date){
        return date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear()+ DELIM + date.getHours()+ DELIM + date.getMinutes() + DELIM + date.getSeconds();
    }
}

const TIME_DIFF_START = "----"
const DELIM = " : "