import axios from 'axios';

const ALL_EVENTS = 'ALL_EVENTS';
const EVENT = 'EVENT';

export function allEvents() {
    return function (dispatch) {
      return fetch('http://localhost:3001/events')
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: ALL_EVENTS, payload: json});
        }).catch((err)=>console.log(err))
    };
  }


  export function EditEvent({name, date, location, weather, id, userid}){
    const userId = userid;
    return function (dispatch){
        axios.put(`http://localhost:3001/event/${id}`, {name, date, location, weather, userId})
            .then(res =>
                dispatch({
                    payload: true
                }),
            ).catch(e => alert("Errors dates"))
    }
};

export function getEvent(id) {
  return function (dispatch) {
    console.log(id)
    return fetch(`http://localhost:3001/event/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: EVENT, payload: json});
      }).catch((err)=>console.log(err))
  };
}


export function createEvent({name, location, date, weather, userid}){
  const userId = userid
  console.log(name, location, date, weather, userId)
  return function (dispatch){
      axios.post(`http://localhost:3001/event`, {name, location, date, weather, userId})
          .then(res =>
              dispatch({
                  type: 'CREATE_A',
                  payload: true
              }),
          ).catch(e => alert("Errors dates"))
  }
};