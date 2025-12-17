import { JSX } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonIcons from '@react-native-vector-icons/ionicons';
import { UserListType, NavigationProp } from './types';
import { UserType } from '../../store/slices/types';
import UserListSkeleton from '../../components/userList/skeletonLoader';
import EmptyListSVG from '../../svg/emptyList';
import Loader from '../loader';
import styles from './styles';
import { ViewModel } from './viewModel';

const UserList = ({
  data,
  loading,
  error,
  onPullRefresh,
}: UserListType): JSX.Element => {
  const navigation = useNavigation<NavigationProp>();

  const {
    displayData,
    loadingMore,
    refreshing,
    searchText,
    setSearchText,
    loadMore,
    onRefresh,
  } = ViewModel({ data, onPullRefresh });

  if (loading) return <UserListSkeleton />;
  if (!loading && data.length === 0) return <EmptyListSVG />;
  if (error) Alert.alert(error);

  const renderUsers = ({ item }: { item: UserType }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
      style={styles.userList}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>
          <IonIcons name="mail" size={15} color="grey" /> {item.email}
        </Text>
        <Text style={styles.company}>
          <IonIcons name="business" size={15} color="grey" />{' '}
          {item.company.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () =>
    loadingMore ? <Loader containerStyle={styles.footer} size="small" /> : null;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search user"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

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
    </View>
  );
};

export default UserList;
