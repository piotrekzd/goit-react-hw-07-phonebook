import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contactsSlice';
import style from './Filter.module.css'

export const Filter = () => {

    const dispatch = useDispatch();
    const onChange = e => {
        const value = e.target.value.toLowerCase();
        dispatch(handleFilter(value));
    };
    return (
        <label className={style.label}>Find contacts by name
            <input className={style.input}
                type='name'
                onChange={onChange}
            />
        </label>
    );
};
