import React, {useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import styles from './edit.module.scss'
import { EditEvent, getEvent } from '../../redux/actions';
import {HMenu} from '../hamburgerMenu/HamMenu';

export function Edit({id}){
const [Input, setInput] = useState({ name:'', date:'', location:'', weather:'', id:'', userid:''});
const dispatch = useDispatch();
const Event = useSelector((state) => state.Event);
const [Visible, setVisible] = useState('hidden');

function handlechange1(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
};

const visible1 = (e) => {
    e.preventDefault()
    if(Visible == 'hidden') setVisible('visible');
    else if(Visible == 'visible') setVisible('hidden');
};

useEffect(() => {
    dispatch(getEvent(id));
}, []);

function  handlesubmit(e) {
    e.preventDefault();
    
    if(!Input.name){
      return alert('Must choose a Name')
    }
    else if(!Input.date){
        return alert('Must choose a Date')
    }
    else if(!Input.location){
        return alert('Must choose a Location')
    }
    else if(!Input.weather){
        return alert('Must choose a Weather')
    }
    dispatch(EditEvent(Input));
    setInput({name:'', date:'', location:'', weather:'', id:'', userid:''});
    alert('Success!');
}   
    return (
        Event &&
        <div className={styles.titleCont}>
        <h1 className={styles.title}>Create Event</h1>
        <HMenu className={styles.menu}/>
        <div className={styles.card}>
            <h1 className={styles.h1}>{Event.id}</h1>
            <h1 className={styles.h1}>{Event.name}</h1>
            <h1 className={styles.h1}>{Event.date.slice(0, 10)}</h1>
            <h1 className={styles.h1}>{Event.location}</h1>
            <h1 className={styles.h1}>{Event.weather}</h1>
            <h1 className={styles.h1}>{Event.userId}</h1>
            <button className={styles.button} onClick={(e)=> visible1(e)}>Edit </button>
            <div style={{visibility:Visible}} className={styles.inputCont}>
                <input 
                className={styles.input1}
                onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })}
                value={Input.id}
                name='id'
                placeholder='id' />
                <input 
                className={styles.input1}
                value={Input.name}
                name='name'
                onChange={handlechange1}
                placeholder='Name' />
                <input 
                className={styles.input1}
                name='date' 
                onChange={handlechange1} 
                value={Input.date} 
                placeholder='AAAA/MM/DD'/>
                <input 
                className={styles.input1}
                name='location' 
                onChange={handlechange1} 
                value={Input.location} 
                placeholder='Location'/>
                <input 
                className={styles.input1}
                 name='weather' 
                onChange={handlechange1} 
                value={Input.weather} 
                placeholder='Weather'/>
                <input 
                className={styles.input1}
                name='userid' 
                onChange={handlechange1} 
                value={Input.userid} 
                placeholder='User Id'/>
                <button className={styles.button} onClick={handlesubmit}>OK</button>
                </div>
                </div>
        </div>
    )
}