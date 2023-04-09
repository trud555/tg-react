import React, { useEffect, useState } from 'react';
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {

    const [nameClient, setNameClient] = useState('')
    const [telephon, setTelephon] = useState('')
    const [city, seCity] = useState('Киев')
    const{tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить'
        })
    }, [])

    useEffect(() => {
        if(!nameClient || !telephon){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [])

    const onChangeNameClient = (e) => {
        setNameClient(e.target.value)
    }

    const onChangeTelephon = (e) => {
        setTelephon(e.target.value)
    }

    const onChangeCity = (e) => {
        seCity(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input 
                type="text" 
                className={'input'} 
                placeholder={'Имя'} 
                value={nameClient} 
                onChange={onChangeNameClient}/>
            <input 
                type="text" 
                className={'input'} 
                placeholder={'Телефон'} 
                value={telephon} 
                onChange={onChangeTelephon}/>
            <select className={'select'} value={city} onChange={onChangeCity} >
                <option value={'Киев'}>Киев</option>
                <option value={'Львов'}>Львов</option>
            </select>
         
        </div>
    );
};

export default Form;