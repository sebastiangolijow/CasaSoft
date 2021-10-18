import React, {useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { allEvents} from '../../redux/actions';
import styles from './eventlisting.module.scss';
import {HMenu} from '../hamburgerMenu/HamMenu';
import {Link} from 'react-router-dom';
export function EventL() {

const dispatch = useDispatch();
const eventos = useSelector((state) => state.Events);

useEffect(()=>{
  dispatch(allEvents())
}, []);



    return (
        <div className={styles.container}>
            <div className={styles.titleCont}>
                <h1 className={styles.title}>Event Listing Screen</h1>
                <HMenu className={styles.menu}/>
            </div>
            <div className={styles.container2}>
            {
                eventos && eventos.map((item, id) => (
                        <div className={styles.card} id={id}>
                        <h1 className={styles.h1}>Id: {item.id}</h1>
                        <h1 className={styles.h1}>Name: {item.name}</h1>
                        <h1 className={styles.h1}>Date: {item.date.slice(0, 10)}</h1>
                        <h1 className={styles.h1}>Location: {item.location}</h1>
                        <h1 className={styles.h1}>Weather: {item.weather}</h1>
                        <div>
                        <button className={styles.button}><Link className={styles.link} to={`edit/${item.id}`}>EDIT</Link></button>
                        <button className={styles.button}><Link to='/create' className={styles.link}>CREATE</Link></button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}