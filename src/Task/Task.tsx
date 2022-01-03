import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch
} from 'react-native';
import axios from 'axios';
import {LOCALHOST_IP} from '../../config.js';

function Task(props) {
    const [done, setDone] = useState(false);
    const [tasks, setTasks] = useState([]);

    const styles = StyleSheet.create({
        task: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 5,
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
        },
        switch: {
            flex: 1,
            alignSelf: 'flex-end',
            backgroundColor: 'orange'
        }
    });

    const getTasks = async () => {
        try{
            let tasks = await axios.get(`http://${LOCALHOST_IP}:5000/tasks/Complete`);
            console.log(tasks.data);
        }catch(err){
            console.log(err);
        } 
    }

    const toggleSwitch = () => {
        setDone(!done);
    }

    useEffect(()=>{
        getTasks();
    },[])

    return (
        <View style={[styles.task, {
            flexDirection: "row"
        }]}>
            <Switch
                style={styles.switch}
                value={done}
                onValueChange={toggleSwitch}
            ></Switch>
            <Text style={styles.description}>Hello</Text>
            <Text style={styles.date}>12/16</Text>
        </View>
    );
}

export default Task;