import { UserType } from '../../store/slices/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

export type UserListType = {
  data: UserType[];
  loading: boolean;
  error?: string | null;
  onPullRefresh?: () => void;
  isFromUsers?: boolean;
};

export type ViewModelProps = {
  data: UserType[];
  onPullRefresh?: () => Promise<void>;
};

export type NavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;
