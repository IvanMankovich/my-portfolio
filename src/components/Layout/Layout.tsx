import { useState } from 'react';
import { FAB } from '../FAB/FAB';
import { Main } from '../Main/Main';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Sidenav } from '../Sidenav/Sidenav';

export const Layout = (props: any) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between items-stretch min-w-full min-h-full bg-white">
      <FAB isMenuOpen={isMenuOpen} onClickHandler={setMenuOpen}></FAB>
      <MobileMenu isVisible={isMenuOpen} onClickHandler={setMenuOpen}></MobileMenu>
      <Sidenav></Sidenav>
      <Main>{props.children}</Main>
    </div>
  );
};
