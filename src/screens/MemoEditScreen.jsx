import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import Appbar from '../components/Appbar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardsafeView';

export default function MemoEditScreen() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height" keyboardVerticalOffset="60">
      <Appbar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
