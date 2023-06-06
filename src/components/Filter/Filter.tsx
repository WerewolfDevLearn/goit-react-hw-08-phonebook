import FilterStl from './Filter.module.css';
import { ContactFilter } from '../../redux/filterSlices';
import usePHBState from '../../redux/selectors';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const { filter } = usePHBState();
  const dispatch = useDispatch();
  return (
    <div className={FilterStl.filterContainer}>
      <label className={FilterStl.label}>
        Find contact by name:
        <input
          type='text'
          value={filter}
          onChange={(e) => dispatch(ContactFilter(e.target.value))}
          name='filter'
          className={FilterStl.input}
        />
      </label>
    </div>
  );
}
