import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
    View,
} from 'react-native';

function AddTask(props) {
    const [date, setDate] = useState(new Date())
    return (
        <View>
            <DatePicker date={date}></DatePicker>
        </View>
    )
}

export default AddTask;