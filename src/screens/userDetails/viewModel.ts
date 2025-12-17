import { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import type { RootState } from '../../store';
import { fetchUserDetails } from '../../store/thunks/userDetailsThunk';
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice';
import { UserDetailsRouteProp } from './types';

export const ViewModel = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<UserDetailsRouteProp>();

  const { userId, isFromUsers } = route.params;

  const { usersDetail, loading, error } = useSelector(
    (state: RootState) => state.usersDetails,
  );

  /** Fetch user details */
  useEffect(() => {
    dispatch(fetchUserDetails(userId));
  }, [dispatch, userId]);

  /** Handle favorite action */
  const toggleFavorite = () => {
    dispatch(isFromUsers ? addFavorite(usersDetail) : removeFavorite(userId));
    navigation.goBack();
  };

  /** External actions */
  const openEmail = () => Linking.openURL(`mailto:${usersDetail.email}`);

  const openPhone = () => Linking.openURL(`tel:${usersDetail.phone}`);

  /** Error handling */
  if (error) {
    Alert.alert(error);
  }

  return {
    usersDetail,
    loading,
    isFromUsers,
    toggleFavorite,
    openEmail,
    openPhone,
  };
};
