import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function usePHBState() {
  return useSelector((state: RootState) => state);
}
