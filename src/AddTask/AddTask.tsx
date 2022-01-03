import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
} from 'react-native';

import axios from 'axios';

function AddTask(props) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({
        description: '',
        dateDue: date,
        complete: false
    });

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row'
        },
        label:{
            flex: 1,
            color: 'black',
            flexGrow: 1,
            textAlignVertical: 'center',
        },
        input:{
            flex: 1,
            borderWidth: 1,
            flexGrow: 3
        }
    })

    console.log(task);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTask({ ...task, description: text })}
                ></TextInput>
            </View>
            <Text style={styles.label}>Date Due:  {date.toISOString().split('T')} </Text>
            <DatePicker
                modal
                date={date}
                open={open}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            ></DatePicker>
        </View>
    )
}

export default AddTask;