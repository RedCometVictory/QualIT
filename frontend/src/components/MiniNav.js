import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ButtonUI from "./UI/ButtonUI";

const MiniNav = () => {
   const [hasMounted, setHasMounted] = useState(false);
  // TODO: pending on the params of the url, generate the appropriate buttons
  const { pathname } = useLocation();
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className="miniNav">
      <header className="miniNav__header">
        <ButtonUI
          className='miniNav__btn'
          // href='/profile'
          href={`${pathname === '/profile' ? '/' : '/profile'}`}
          variant='contained'
        >
          {pathname === '/profile' ? 'Home' : 'Profile'}
        </ButtonUI>
        <ButtonUI
          className='miniNav__btn'
          // href='/tasks'
          href={`${pathname === '/tasks' ? '/' : '/tasks'}`}
          variant='contained'
        >
          {pathname === "/tasks" ? 'Home' : 'Boards'}
        </ButtonUI>
      </header>
    </section>
  )
};
export default MiniNav;