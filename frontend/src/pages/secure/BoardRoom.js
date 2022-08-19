import React from 'react';

const BoardRoom = () => {
  return (
    <section className="board">
      <div className="board__lane">
        <div className="board__new-lane">
          <h3 className="board__new-header">
            Add New Lane
          </h3>
        </div>
      </div>
      <div className="board__lane"></div>
      <div className="board__lane"></div>
      <div className="board__lane"></div>
    </section>
  )
};
export default BoardRoom;