import { JSX, useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import UserListSkeleton from '../../components/userList/skeletonLoader';
import { useNavigation } from '@react-navigation/native';
import { UserListType, NavigationProp } from './types';
import { UserType } from '../../store/slices/types';

const PAGE_SIZE = 9; // number of items to show at a time

const UserList = ({
  data,
  loading,
  error,
  onPullRefresh,
}: UserListType): JSX.Element => {
  const [displayData, setDisplayData] = useState<UserType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    if (data?.length) {
      // Initialize with first PAGE_SIZE items
      setDisplayData(data.slice(0, PAGE_SIZE));
      setCurrentPage(1);
    }
  }, [data]);

  const onRefresh = async () => {
    setRefreshing(true);

    if (onPullRefresh) {
      try {
        await onPullRefresh(); // re-call API
        setCurrentPage(1); // reset pagination
      } catch (err) {
        Alert.alert('Error', String(err));
      } finally {
        setRefreshing(false);
      }
    }
  };

  const loadMore = () => {
    if (loadingMore || refreshing) return;

    const nextPage = currentPage + 1;
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    if (start >= data.length) return; // No more items

    setLoadingMore(true);
    setTimeout(() => {
      setDisplayData(prev => [...prev, ...data.slice(start, end)]);
      setCurrentPage(nextPage);
      setLoadingMore(false);
    }, 500); // simulate a small delay like API call
  };

  const renderUsers = ({ item }: { item: UserType }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
        style={styles.userList}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Name:{item.name}</Text>
          <Text style={styles.email}>Email:{item.email}</Text>
          <Text style={styles.company}>Company:{item.company.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <UserListSkeleton />;
  } else if (error) {
    Alert.alert(error);
  }

  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" />
      </View>
    );
  };

  return (
    <FlatList
      data={displayData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderUsers}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 10,
    marginBottom: 10,
  },
  userList: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4A90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    color: '#555',
    marginTop: 4,
  },
  company: {
    color: '#777',
    fontSize: 12,
    marginTop: 2,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
});
