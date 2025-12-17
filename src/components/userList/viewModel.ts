import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { UserType } from '../../store/slices/types';
import { ViewModelProps } from './types';
import {
  PAGE_SIZE,
  DEBOUNCED_TIMEOUT,
  LOAD_MORE_TIMEOUT,
} from '../../constant';

export const ViewModel = ({ data, onPullRefresh }: ViewModelProps) => {
  const [displayData, setDisplayData] = useState<UserType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  /** Initialize list */
  useEffect(() => {
    setDisplayData(data.slice(0, PAGE_SIZE));
    setCurrentPage(1);
  }, [data]);

  /** Debounce search */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText.trim());
    }, DEBOUNCED_TIMEOUT);

    return () => clearTimeout(timer);
  }, [searchText]);

  /** Filter data */
  useEffect(() => {
    if (!debouncedSearch) {
      setDisplayData(data.slice(0, PAGE_SIZE));
      setCurrentPage(1);
      return;
    }

    const filtered = data.filter(
      user =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    setDisplayData(filtered.slice(0, PAGE_SIZE));
    setCurrentPage(1);
  }, [debouncedSearch, data]);

  /** Pull to refresh */
  const onRefresh = async () => {
    if (!onPullRefresh) return;

    try {
      setRefreshing(true);
      await onPullRefresh();
      setCurrentPage(1);
    } catch (err) {
      Alert.alert('Error', String(err));
    } finally {
      setRefreshing(false);
    }
  };

  /** Pagination */
  const loadMore = () => {
    if (loadingMore || refreshing || debouncedSearch) return;

    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    if (start >= data.length) return;

    setLoadingMore(true);

    setTimeout(() => {
      setDisplayData(prev => [...prev, ...data.slice(start, end)]);
      setCurrentPage(prev => prev + 1);
      setLoadingMore(false);
    }, LOAD_MORE_TIMEOUT);
  };

  return {
    displayData,
    loadingMore,
    refreshing,
    searchText,
    setSearchText,
    loadMore,
    onRefresh,
  };
};
