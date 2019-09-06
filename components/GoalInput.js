import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onChangeText, value, placeholder, title, onPress, modalVisible, modalClose }) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={title} onPress={onPress} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Close' onPress={modalClose} style={styles.button} color='red'/>
                    </View>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;