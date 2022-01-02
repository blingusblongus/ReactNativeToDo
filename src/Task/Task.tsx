import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Switch
} from 'react-native';

function Task(props) {
    const [done, setDone] = useState(false);
    const styles = StyleSheet.create({
        task: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 5,
        },
        description: {
            flex: 2,
            color: 'black',
            alignSelf: 'center',
            backgroundColor: 'red',
            height: '100%',
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
        </View>
    );
}

export default Task;