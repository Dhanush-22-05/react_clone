import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Pagination() {

  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const handleimage = async () => {
    let datas = await axios.get("https://fakestoreapi.com/products");
    setdata(datas.data);
  };

  useEffect(() => {
    handleimage();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {currentItems.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              width={450}
              height={450}
            />
          </div>
        ))}
      </div>

      <br />

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    </div>
  );
}