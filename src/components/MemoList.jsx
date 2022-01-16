import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemdate}>2020年12月24日</Text>
        </View>
        <View>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemdate}>2020年12月24日</Text>
        </View>
        <View>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemdate}>2020年12月24日</Text>
        </View>
        <View>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemdate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
