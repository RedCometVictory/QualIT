import React from 'react';
import Columns from '../../components/columns/Columns';
import SideMenu from '../../components/SideMenu';

const BoardRoom = () => {
  return (<>
    <section className="board">
      <Columns />
    </section>
    <SideMenu />
  </>)
};
export default BoardRoom;