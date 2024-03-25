import { Link } from 'react-router-dom';

import ChevronIcon from 'assets/images/chevron-left.svg?react';
import CloseIcon from 'assets/images/close.svg?react';

type Props = {
  noCloseBtn?: boolean;
  onPrev?: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ noCloseBtn = false, onPrev }: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-16">
      <button className="flex items-center justify-start w-6 h-6" onClick={onPrev} data-ga="header_back">
        <ChevronIcon />
      </button>
      {!noCloseBtn && (
        <Link to={'/'}>
          <button className="flex items-center justify-end w-6 h-6" data-ga="header_close">
            <CloseIcon />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
