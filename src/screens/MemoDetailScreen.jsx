import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import Appbar from '../components/Appbar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <Appbar />
      <View style={styles.memoheader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memodate}>2020年12月14日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }} name="pencil" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoheader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memodate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
