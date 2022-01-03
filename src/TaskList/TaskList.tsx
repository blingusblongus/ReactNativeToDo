import React from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';
import Task from '../Task/Task';

function TaskList({tasks, getTasks}){
    const styles = StyleSheet.create({
        btnBar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
        },
        btnBarBtn: {
            flex: 1,
        }
    })

    return <View>
        <View style={styles.btnBar}>
            <Button title="Date &uarr;" style={styles.btnBarBtn} onPress={() => getTasks('Date &uarr;')}></Button>
            <Button title="Date &darr;" style={styles.btnBarBtn} onPress={() => getTasks('Date &darr;')}></Button>
            <Button title="Complete" style={styles.btnBarBtn} onPress={() => getTasks('Complete')}></Button>
            <Button title="Incomplete" style={styles.btnBarBtn} onPress={() => getTasks('Incomplete')}></Button>
        </View>
        {tasks.map(task => {
            return <Task key={task.id} task={task} getTasks={getTasks}></Task>
        })}
    </View>
}

export default TaskList;