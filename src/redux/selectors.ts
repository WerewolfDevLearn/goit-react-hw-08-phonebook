import { useSelector } from 'react-redux';
import { ISate } from '../types';
export default function usePHBState() {
  return useSelector((state: ISate) => state);
}
