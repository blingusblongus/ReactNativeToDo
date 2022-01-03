import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
    View,
    TextInput
} from 'react-native';

import axios from 'axios';

function AddTask(props) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(true);

    
    return (
        <View>
            <TextInput>Description:</TextInput>
            <DatePicker 
            modal
            date={date} 
            open={open}
            onConfirm={(date)=> {
                setOpen(false);
                setDate(date);
            }}
            onCancel={()=>{
                setOpen(false)
            }}
            ></DatePicker>
        </View>
    )

    console.log(date);
}

export default AddTask;