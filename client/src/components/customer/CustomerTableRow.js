import React from 'react';

function CustomerTableRow({ customer }) {
  const { sno, customer_name, age, phone, location, created_at } = customer;

  const formattedDate = new Date(created_at).toLocaleDateString(); // Format date
  const formattedTime = new Date(created_at).toLocaleTimeString(); // Format time

  return (
    <tr>
      <td>{sno}</td>
      <td>{customer_name}</td>
      <td>{age}</td>
      <td>{phone}</td>
      <td>{location}</td>
      <td>{formattedDate}</td>
      <td>{formattedTime}</td>
    </tr>
  );
}

export default CustomerTableRow;
