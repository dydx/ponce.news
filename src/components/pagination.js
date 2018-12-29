import React from 'react';

const Pagination = () => (
    <ul className="pagination">
      <li><span class="button disabled">Prev</span></li>
      <li><a href="#" class="page active">1</a></li>
      <li><a href="#" class="page">2</a></li>
      <li><a href="#" class="page">3</a></li>
      <li><span>…</span></li>
      <li><a href="#" class="page">8</a></li>
      <li><a href="#" class="page">9</a></li>
      <li><a href="#" class="page">10</a></li>
      <li><a href="#" class="button">Next</a></li>
    </ul>
);

export default Pagination;