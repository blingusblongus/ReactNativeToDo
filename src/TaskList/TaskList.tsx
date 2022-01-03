import React from 'react';
import {
    View,
} from 'react-native';
import Task from '../Task//Task';

function TaskList({tasks}){
    return <View>
        {tasks.map(task => {
            return <Task key={task.id} task={task}></Task>
        })}
    </View>
}

export default TaskList;