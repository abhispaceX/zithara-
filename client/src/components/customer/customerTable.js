import React from 'react';
import CustomerTableRow from './CustomerTableRow';
import './customer.css'

function CustomerTable({ customers, onSort, sortBy }) {
  const handleSortClick = (field) => {
    onSort(field);
  };

  return (
    <table className="customer-table">
      <thead className='column-header'>
        <tr>
          <th>sno</th>
          <th>Customer Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          <th
            onClick={() => handleSortClick('date')}
            className={sortBy === 'date' ? 'sortable active' : 'sortable'}
          >
            Created Date {sortBy === 'date' ? (sortBy === 'asc' ? '▲' : '▼') : ''}
          </th>
          <th
            onClick={() => handleSortClick('time')}
            className={sortBy === 'time' ? 'sortable active' : 'sortable'}
          >
            Created Time {sortBy === 'time' ? (sortBy === 'asc' ? '▲' : '▼') : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomerTableRow key={customer.sno} customer={customer} />
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
