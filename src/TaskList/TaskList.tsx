import React from 'react';
import {
    View,
} from 'react-native';
import Task from '../Task//Task';

function TaskList({tasks, getTasks}){
    return <View>
        {tasks.map(task => {
            return <Task key={task.id} task={task} getTasks={getTasks}></Task>
        })}
    </View>
}

export default TaskList;