import React from 'react';
import { useField } from 'formik';
import { Text, StyleSheet } from 'react-native';
import TextInput from './TextInput';


const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    
    let styles = StyleSheet.create({
        errorText: {
            color: 'red',
            fontSize: 12,
            marginTop: 4,
        },
    });

    return (
        <>
            <TextInput
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                error={showError ? meta.error : null}
                style={props.style || {}}           
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
}

export default FormikTextInput;