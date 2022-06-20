import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContex } from '../context/AppContext';

const Expenseslist = ({ id, name, cost, search }) => {

  const { dispatch } = useContext(AppContex);

  const handledelete = () => {
    dispatch(
      {
        type: 'Delete',
        payload: id
      }
    );
  }

  const filtersearch = name.includes(search);
  if (filtersearch) {
    return (
      <li className='list-group-item d-flex justify-content-between align-item-center'>
        {name}
        <div>
          <span className='badge bg-primary'>${cost}</span>
          <TiDelete size='1.5em' className='ms-3' onClick={handledelete} />
        </div>
      </li>
    )
  }
}

export default Expenseslist