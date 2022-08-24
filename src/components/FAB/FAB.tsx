import './FAB.scss';

export interface IFab {
  isMenuOpen: boolean;
  onClickHandler: (state: boolean) => void;
}

export const FAB = ({ isMenuOpen, onClickHandler }: IFab) => {
  return (
    <div
      className={`inline-block xs:hidden w-12 h-12 fixed top-2 right-2 z-[3] bg-slate-500 hover:bg-slate-300 transition-all rounded-full cursor-pointer ${
        isMenuOpen ? 'change' : ''
      }`}
      onClick={() => onClickHandler(!isMenuOpen)}
    >
      <div className="relative w-[29px] h-[4px] bg-black mx-auto transition-all mt-[12px] mb-[6px]"></div>
      <div className="relative w-[29px] h-[4px] bg-black mx-auto transition-all my-[6px]"></div>
      <div className="relative w-[29px] h-[4px] bg-black mx-auto transition-all my-[6px]"></div>
    </div>
  );
};
