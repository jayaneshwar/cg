import React, { Component } from 'react';
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Form extends Component {

    markSub1Ref = React.createRef();
    markSub2Ref = React.createRef();
    markSub3Ref = React.createRef();
    markSub4Ref = React.createRef();
    markSub5Ref = React.createRef();
    scrollViewRef = React.createRef();
  
    constructor(props) {
      super(props);
      this.state = {
            mark1: 0,
            mark2: 0,
            mark3: 0,
            mark4: 0,
            mark5: 0,
            credit1: 0,
            credit2: 0,
            credit3: 0,
            credit4: 0,
            credit5: 0,
            showMark1Error: false,
            showMark2Error: false,
            showMark3Error: false,
            showMark4Error: false,
            showMark5Error: false,
            showCredit1Error: false,
            showCredit2Error: false,
            showCredit3Error: false,
            showCredit4Error: false,
            showCredit5Error: false,
      };
      this.submitPressed = this.submitPressed.bind(this);
    }
    findCalc = () => {
        
        const {mark1,mark2,mark3,mark4,mark5,credit1,credit2,credit3,credit4,credit5} = this.state;
        
        console.log("lee", mark1.valueOf());
        let denom = (parseInt(credit1))+(parseInt(credit2))+(parseInt(credit3))+parseInt(credit4)+parseInt(credit5);
        console.log("denom",denom)
        let credit = ((mark1.valueOf()*credit1.valueOf())+(mark2.valueOf()*credit2.valueOf())+(mark3.valueOf()*credit3.valueOf())+(mark4.valueOf()*credit4.valueOf())+(mark5.valueOf()*credit5.valueOf()))/denom;
        console.log("Credit: ",credit);
    }

      submitPressed() {
        const {state} = this;
        console.log("submitPressed this.state: ", this.state);
        this.setState({
            showMark1Error: this.state.mark1.valueOf() < 1 || this.state.mark1.valueOf() > 100,
            showMark2Error: this.state.mark2.valueOf() < 1 || this.state.mark2.valueOf() > 100,
            showMark3Error: this.state.mark3.valueOf() < 1 || this.state.mark3.valueOf() > 100,
            showMark4Error: this.state.mark4.valueOf() < 1 || this.state.mark4.valueOf() > 100,
            showMark5Error: this.state.mark5.valueOf() < 1 || this.state.mark5.valueOf() > 100,
            showCredit1Error: this.state.credit1.valueOf() < 1 || this.state.credit1.valueOf() > 5,
            showCredit2Error: this.state.credit2.valueOf() < 1 || this.state.credit2.valueOf() > 5,
            showCredit3Error: this.state.credit3.valueOf() < 1 || this.state.credit3.valueOf() > 5,
            showCredit4Error: this.state.credit4.valueOf() < 1 || this.state.credit4.valueOf() > 5,
            showCredit5Error: this.state.credit5.valueOf() < 1 || this.state.credit5.valueOf() > 5,
        });
        if(!state.showMark1Error)
            if(!state.showMark2Error)
                if(!state.showMark3Error)
                    if(!state.showCredit4Error)
                        if(!state.showCredit5Error)
                            if(!state.showMark1Error)
                                if(!state.showCredit2Error)
                                    if(!state.showCredit3Error)
                                        if(!state.showCredit4Error)
                                            if(!state.showCredit5Error)
                                                this.findCalc();

        Keyboard.dismiss();
      }
    render() {
        return (
            <KeyboardAwareScrollView                
                style={styles.container}
                contentOffset={{ x: 0, y: 24 }}
                ref={this._scrollViewRef}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingTop: 24 }}
                contentInsetAdjustmentBehavior="always"
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                enableOnAndroid={true}
                extraHeight={32}
                extraScrollHeight={Platform.OS == "android" ? 32 : 0}
                enableResetScrollToCoords={false}
                onKeyboardDidShow={this._keyboardDidShowHandler}
            >
                <View style={styles.container}>
                    <Text style={styles.header}>Mark Details Form</Text>
                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Mark For Subject1"
                            keyboardType='numeric'
                            style={styles.textInput}
                            onChangeText={(mark1) => this.setState({mark1})} 
                        />
                        <Text style={{padding:10}}></Text>
                        <TextInput
                            placeholder="Credit For Subject1"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(credit1) => this.setState({credit1})} 
                        />
                    </View>
                    
                    {this.state.showCredit1Error &&
                            <Text style={styles.errorText}>Please Enter credit between 1 to 5.</Text>
                    }
                    {this.state.showMark1Error &&
                            <Text style={styles.errorText}>Please Enter mark between 1 to 100.</Text>
                    }

                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Mark For Subject2"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(mark2) => this.setState({mark2})} 
                        />
                        <Text style={{padding:10}}></Text>
                        <TextInput
                            placeholder="Credit For Subject2"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(credit2) => this.setState({credit2})} 
                        />
                    </View>
                    
                        {this.state.showCredit2Error &&
                            <Text style={styles.errorText}>Please Enter credit between 1 to 5.</Text>
                        }
                        {this.state.showMark2Error &&
                            <Text style={styles.errorText}>Please Enter mark between 1 to 100.</Text>
                        }
                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Mark For Subject3"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(mark3) => this.setState({mark3})} 
                        />
                        <Text style={{padding:10}}></Text>
                        <TextInput
                            placeholder="Credit For Subject3"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(credit3) => this.setState({credit3})} 
                        />
                    </View>
                        {this.state.showCredit3Error &&
                            <Text style={styles.errorText}>Please Enter credit between 1 to 5.</Text>
                        }
                        {this.state.showMark3Error &&
                            <Text style={styles.errorText}>Please Enter mark between 1 to 100</Text>
                        }

                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Mark For Subject4"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(mark4) => this.setState({mark4})} 
                        />
                        <Text style={{padding:10}}></Text>
                        
                        <TextInput
                            placeholder="Credits For Subject4"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(credit4) => this.setState({credit4})} 
                        />
                    </View>
                        {this.state.showCredit4Error &&
                            <Text style={styles.errorText}>Please Enter credit between 1 to 5.</Text>
                        }
                        {this.state.showMark4Error &&
                            <Text style={styles.errorText}>Please Enter mark between 1 to 100.</Text>
                        }

                    <View style={styles.inputTextWrapper}>
                        <TextInput
                            placeholder="Mark For Subject5"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(mark5) => this.setState({mark5})} 
                        />
                        <Text style={{padding:10}}></Text>
                        
                        <TextInput
                            placeholder="Credits For Subject5"
                            keyboardType='numeric'
                            style={styles.textInput}                        
                            onChangeText={(credit5) => this.setState({credit5})} 
                        />
                    </View>
                        {this.state.showCredit5Error &&
                            <Text style={styles.errorText}>Please Enter credit between 1 to 5.</Text>
                        }
                        {this.state.showMark5Error &&
                            <Text style={styles.errorText}>Please Enter mark between 1 to 100.</Text>
                        }                    
                    <View style={styles.btnContainer}>
                    <Button title="Submit" onPress={this.submitPressed} />
                    </View>

                </View>                
            </KeyboardAwareScrollView>
        );
    }
}

export default Form;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
    },
    header: {
      fontSize: 28,
      padding: 20,
      margin: 12,
      textAlign: "center",
    },
    inputTextWrapper: {
      marginBottom: 24,
      flexDirection: 'row',
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      padding: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop:36,
    }
  });
