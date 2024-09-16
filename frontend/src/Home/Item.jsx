import React from 'react';
import './Item.css';

const ListItem = ({ index, platform, last, buy, sell }) => {
  const diff = buy ? ((sell - buy) / buy * 100).toFixed(2) : 0;
  const saving = (sell - buy).toFixed(2);

  const diffColor = sell - buy > 0 ? "#5dc7c2" : "#da5757";
  const savingIndicator = sell - buy > 0 ? "▲" : "▼";

  return (
    <div className="list--item">
      <div className="list-no">{index + 1}</div>
      <div className="list-platform">{platform}</div>
      <div className="list-last">{last}</div>
      <div className="list-buy-sell">{buy}/{sell}</div>
      <div style={{ color: diffColor }} className="list-diff">{diff}%</div>
      <div style={{ color: diffColor }} className="list-saving">{savingIndicator} {saving}</div>
    </div>
  );
};

export default ListItem;
