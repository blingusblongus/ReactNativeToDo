import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch
} from 'react-native';

function Task({ task }) {
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
            backgroundColor: 'orange'
        }
    });

    const toggleSwitch = () => {
        setDone(!done);
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
                </>
            }

        </View>
    );
}

export default Task;