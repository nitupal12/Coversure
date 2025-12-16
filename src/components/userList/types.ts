import { UserType } from '../../store/slices/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

export type UserListType = {
  data: UserType[];
  loading: boolean;
  error?: string | null;
};

export type NavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;
