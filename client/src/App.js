import React, { useState, useEffect } from 'react';
import CustomerTable from './components/customer/customerTable';
import Search from './components/searchBar/search';
import Pagination from './components/pagination/pagination';
import axios from 'axios'
import './App.css'
function App() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3002/api/customers');
      setCustomers(response.data);
      setTotalPages(Math.ceil(response.data.length / 20)); // 20 records per page
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (field) => {
    setSortBy(field);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredCustomers = customers.filter((customer) => {
    const searchText = searchTerm.toLowerCase();
    return (
      customer.customer_name.toLowerCase().includes(searchText) ||
      customer.location.toLowerCase().includes(searchText)
    );
  });

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.created_at) - new Date(b.created_at);
    } else if (sortBy === 'time' && a.created_at && b.created_at ) {
      const timeA = a.created_at.split(' ')[1]?? '';
      const timeB = b.created_at.split(' ')[1]?? '';
      return timeA.localeCompare(timeB);
    } else {
      return 0;
    }
  });

  const paginatedCustomers = sortedCustomers.slice(
    (currentPage - 1) * 20,
    currentPage * 20
  );

  return (
    <div className="App">
      <h1 className='main-head styled-header' >Customer Data</h1>
      <Search onSearch={handleSearch} />
      <CustomerTable
        customers={paginatedCustomers}
        onSort={handleSort}
        sortBy={sortBy}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;

