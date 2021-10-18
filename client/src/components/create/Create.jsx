import React, {useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import styles from './create.module.scss';
import {createEvent} from '../../redux/actions';
import {HMenu} from '../hamburgerMenu/HamMenu';

export function Create() {
const [Input, setInput] = useState({ name:'', date:'', location:'', weather:'', userid:''});
const dispatch = useDispatch();

function handlechange1(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
};

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
    dispatch(createEvent(Input));
    setInput({name:'', date:'', location:'', weather:'', id:'', userid:''});
    alert('Success!');
} 
    return (
    <div >
            <div className={styles.titleCont}>
                <h1 className={styles.title}>Create Event</h1>
                <HMenu className={styles.menu}/>
            <div>
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