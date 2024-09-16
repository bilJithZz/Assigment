import React, { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';
import './Lists.css';

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initial data deletion request
    axios.delete('http://localhost:5000/delete-data')
      .then(response => {
        console.log('Data deleted', response);
      })
      .catch(err => console.error('Error deleting data', err));

    // Fetch data from the API
    axios.get('http://localhost:5000/fetch-data')
      .then(response => {
        console.log('Data fetched', response);

        // Fetch additional data
        axios.get('http://localhost:5000/get-data')
          .then(response => {
            console.log('Data get', response);
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="trade-list h-screen">
      <div className="list--head">
        <div className="list-no">#</div>
        <div className="list-platform">Platform</div>
        <div className="list-last">Last Traded Price</div>
        <div className="list-buy-sell">Buy/Sell Price</div>
        <div className="list-diff">Difference</div>
        <div className="list-saving">Savings</div>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.map((item, index) => (
        <Item
          key={index}
          index={index}
          platform={item.name}
          last={item.last}
          buy={item.buy}
          sell={item.sell}
        />
      ))}
    </div>
  );
};

export default List;
