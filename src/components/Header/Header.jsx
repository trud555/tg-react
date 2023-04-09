import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css'


const Header = () => {
    
   const {tg, user, onClose} = useTelegram()
    return (
        <div className={'header'}>
            work
            <br/>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'} >
                Добро пожаловать, {user?.first_name} !</span>
        </div>
    );
};

export default Header;