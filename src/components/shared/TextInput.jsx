import React from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  error: {
    borderColor: 'red',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const inputStyle = [
    styles.input,
    style,
    error && styles.error,
  ];

  return (
    <NativeTextInput
      style={inputStyle}
      {...props}
    />
  );
};

export default TextInput;
