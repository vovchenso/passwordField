import React from 'react';
import { StyleSheet, View } from 'react-native';

import PasswordInput from './src/components/PasswordInput';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <PasswordInput
                    placeholder="Enter your password..."
                    onChange={ value => console.log(value) }
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    }
});
