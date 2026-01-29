import { Pressable, Text, StyleSheet } from 'react-native';

export default function AppBarTab({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.tab}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tab: {
    marginRight: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
