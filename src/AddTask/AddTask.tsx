import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import { LOCALHOST_IP } from '../../config';

import axios from 'axios';

function AddTask(props) {
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({
        description: '',
        dateDue: new Date(),
        complete: false
    });

    const addTask = async () => {
        try{
            console.log(task);
            await axios({
                method: 'POST',
                url: `http://${LOCALHOST_IP}:5000/tasks`,
                data: task
            });
            console.log('add success');
        }catch(err){
            console.log(err);
            console.log(task);
        }
        
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: 10,
        },
        label: {
            flex: 1,
            color: 'black',
            flexGrow: 1,
            textAlignVertical: 'center',
        },
        input: {
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
            <View style={styles.container}>
                <Text style={styles.label}>Date Due:  {task.dateDue.toISOString().split('T')[0]} </Text>
                <Button
                    onPress={() => { setOpen(true) }}
                    title="Edit"></Button>
            </View>
            <DatePicker
                modal
                mode="date"
                date={task.dateDue}
                open={open}
                onConfirm={(d) => {
                    setOpen(false);
                    setTask({...task, dateDue: d});
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            ></DatePicker>
            <Button
                    onPress={addTask}
                    title="Submit"></Button>
        </View>
    )
}

export default AddTask;