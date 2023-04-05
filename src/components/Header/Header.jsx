import React from 'react';
import Button from '../Button/Button';

const tg = window.Telegram.WebApp;

const Header = () => {
    
    const onClose = () => {
        tg.close()
    
      }
    return (
        <div className={'header'}>
            work
            <br/>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'} >{tg.initDataUnsafe?.user?.first_name}</span>
        </div>
    );
};

export default Header;