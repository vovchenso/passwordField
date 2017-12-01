import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity
} from 'react-native';

export default class PasswordInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            focus: false
        };
    }

    onShowHide = () => {
        this.setState({
            show: !this.state.show
        });
    };

    onFocusBlur = () => {
        this.setState({
            focus: !this.state.focus
        });
    };

    render() {
        const { placeholder, onChange } = this.props;
        const { show, focus } = this.state;

        const inputStyles = [
            styles.input,
            focus && styles.inputActive,
            show && styles.inputShow
        ];

        const textStyle = [
            styles.buttonText,
            show ? styles.buttonTextShow : styles.buttonTextHide
        ];

        return (
            <View style={styles.wrapper}>
                <TextInput
                    onFocus={ this.onFocusBlur }
                    onBlur={ this.onFocusBlur }
                    style={ inputStyles }
                    placeholder={ placeholder }
                    secureTextEntry={ !show }
                    onChangeText={ value => onChange && onChange(value) }
                />
                <TouchableOpacity
                    accessibilityTraits="button"
                    accessibilityComponentType="button"
                    onPress={ this.onShowHide }
                    style={ styles.button }
                >
                    <Text style={ textStyle }>
                        { (show ? 'HIDE' : 'SHOW') }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        color: '#a0a0a0'
    },
    inputActive: {
        borderColor: '#88f',
    },
    inputShow: {
        borderColor: '#f22',
        backgroundColor: '#fbb',
        color: '#000'
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
        backgroundColor: 'transparent'
    },
    buttonText: {
        fontSize: 12,
    },
    buttonTextHide: {
        color: '#000'
    },
    buttonTextShow: {
        color: '#f22'
    },
    wrapper: {
        position: 'relative',
        width: '100%'

    }
});
