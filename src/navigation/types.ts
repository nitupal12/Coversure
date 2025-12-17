export type TabRouteName = 'users' | 'favorite';

export type RenderTabIconParams = {
  routeName: TabRouteName;
  color: string;
  size: number;
};

export type RootStackParamList = {
  Tabs: undefined;
  UserDetails: { userId: number };
};
