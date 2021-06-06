import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            TitleText: "Story Title",
            AuthorText: "Name of the Author",
            StoryText: "Write your story here"
        }
    }
    render(){
        return(
            <View>
                <Header
                    backgroundColor={'#00688B'}
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#00B2EE', fontSize: 20 },
                    }}
                />
                <TextInput
                    style={styles.inputBox}
                    secureTextEntry = {true}
                    placeholder="Title"
                    onChangeText={(text)=>{
                        this.setState({
                            TitleText: text
                        })
                    }}
                />
                <TextInput
                    style={styles.inputBox}
                    secureTextEntry = {true}
                    placeholder="Author"
                    onChangeText={(text)=>{
                        this.setState({
                            AuthorText: text
                        })
                    }}
                />
                <TextInput
                    style={styles.inputBox}
                    secureTextEntry = {true}
                    placeholder="Story"
                    onChangeText={(text)=>{
                        this.setState({
                            StoryText: text
                        })
                    }}
                />
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    inputBox:{
        width: 250,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
    }
  })