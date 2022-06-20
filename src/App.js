import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expenses from './components/Expenses';
import Addexpenses from './components/Addexpenses';
import { AppProvider } from './context/AppContext';
import { useState } from 'react';

const App = () => {

  const [search, setSearch] = useState('');

  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">React Budget App</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h1 className='mt-3'>Expenses</h1>
        <input type="search" className='form-control' placeholder='Type to search expenses...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="row mt-3">
          <div className="col-sm">
            <Expenses search={search} />
          </div>
        </div>
        <h1 className='mt-3'>Add Expenses</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Addexpenses />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App