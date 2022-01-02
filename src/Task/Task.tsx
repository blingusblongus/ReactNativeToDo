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
            borderRadius: 5
        },
        description: {
            flex: 1,
            color: 'black'
        },
        switch: {
            flex: 1,
        }
    });

    const toggleSwitch = () => {
        setDone(!done);
    }

    return (
        <View style={styles.task}>
            <Switch
                style={styles.switch}
                value={done}
                onValueChange={toggleSwitch}></Switch>
            <Text style={styles.description}>Hello</Text>
        </View>
    );
}

export default Task;