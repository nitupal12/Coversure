import { useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { fetchUserDetails } from '../../store/thunks/userDetailsThunk';
import { useRoute } from '@react-navigation/native';
import { UserDetailsRouteProp } from './types';
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice';

const UserDetailsScreen = () => {
  const { usersDetail, loading, error, reduxState } = useSelector(
    (state: RootState) => ({
      usersDetail: state.usersDetails.usersDetail,
      loading: state.usersDetails.loading,
      error: state.usersDetails.error,
      reduxState: state,
    }),
  );
  const dispatch = useDispatch();
  const route = useRoute<UserDetailsRouteProp>();
  const { userId } = route.params;

  useEffect(() => {
    dispatch(fetchUserDetails(userId));
  }, []);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <View>
      <Text>Name: {usersDetail.name}</Text>
      <Text>Email: {usersDetail.email}</Text>
      <Text>Phone: {usersDetail.phone}</Text>
      <Text>Username: {usersDetail.username}</Text>
      <Text>Website: {usersDetail.website}</Text>
      <TouchableOpacity onPress={() => dispatch(addFavorite(usersDetail))}>
        <Text>Add to favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(removeFavorite(Number(userId)))}
      >
        <Text>Remove from favorite</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetailsScreen;
