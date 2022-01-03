import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch,
    Button,
} from 'react-native';
import axios from 'axios';
import { LOCALHOST_IP } from '../../config';

function Task({ task, getTasks}) {
    const [done, setDone] = useState(task.complete);

    const styles = StyleSheet.create({
        task: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 5,
            margin: 2,
        },
        description: {
            flex: 5,
            color: 'black',
            alignSelf: 'center',
            backgroundColor: 'red',
            height: '100%',
            textAlignVertical: 'center',
        },
        date: {
            flex: 2,
            textAlignVertical: 'center',
        },
        switch: {
            flex: 1,
            alignSelf: 'flex-end',
            backgroundColor: 'orange',
            height: '100%',
        }
    });

    const toggleSwitch = () => {
        setDone(!done);
    }

    const deleteTask = async () => {
        try{
            await axios.delete(`http://${LOCALHOST_IP}:5000/tasks/${task.id}`);
            await getTasks();
        }catch(err){
            console.log(err);
        }
    }

    console.log(task);

    return (
        <View style={[styles.task, {
            flexDirection: "row"
        }]}>
            {task &&
                <>
                    <Switch
                        style={styles.switch}
                        value={done}
                        onValueChange={toggleSwitch}
                    ></Switch>

                    <Text style={styles.description}>{task.description}</Text>
                    <Text style={styles.date}>{task.date_due?.split('T')[0]}</Text>
                    <Button title="Delete" onPress={deleteTask}></Button>
                </>
            }

        </View>
    );
}

export default Task;