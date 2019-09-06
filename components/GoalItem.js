import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = ({value, id, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress(id)}>
            <View style={styles.listItem}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc'
    }
});

export default GoalItem;