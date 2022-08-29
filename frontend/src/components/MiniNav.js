import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { FaChevronCircleLeft } from 'react-icons/fa';
// import { IconButton, styled } from "@mui/material";
import ButtonUI from "./UI/ButtonUI";
// import SideMenu from './SideMenu';
import { unsplashTheme } from '../redux/features/theme/themeSlice';

const MiniNav = () => {
  const [expanded, setExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const dispatch = useDispatch();
  // const { drawer } = useSelector(state => state.theme);

  const { pathname } = useLocation();
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
    
  const toggleDrawer = (value) => {
    setExpanded(!expanded);
    dispatch(unsplashTheme(value));
  };
  
  return (
    <section className="miniNav">
      <header className="miniNav__header">
        <ButtonUI
          className='miniNav__btn'
          href={`${pathname === '/profile' ? '/' : '/profile'}`}
          variant='contained'
        >
          {pathname === '/profile' ? 'Home' : 'Profile'}
        </ButtonUI>
        <ButtonUI
          className='miniNav__btn'
          href={`${pathname === '/tasks' ? '/' : '/tasks'}`}
          variant='contained'
        >
          {pathname === "/tasks" ? 'Home' : 'Boards'}
        </ButtonUI>
        <FaChevronCircleLeft
          aria-expanded={expanded}
          aria-label="show-more"
          onClick={() => toggleDrawer(true)}
          className="miniNav__btn chev-icon"
        />
      </header>
    </section>
  )
};
export default MiniNav;