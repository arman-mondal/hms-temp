import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { Provider } from 'react-redux'
import store from './store'
const data={
    _id: "66e988a547a4a577cc437985",
    name: "ashish",
    email: "ash123@gmail.com",
    role: 0,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTk4OGE1NDdhNGE1NzdjYzQzNzk4NSIsImlhdCI6MTcyNjU4MTkxNSwiZXhwIjoxNzI5MTczOTE1fQ.aoELVNJjsnwFIEj7kRTanXnq4xY-dcJY4H7Sz0QyGUw"
}

localStorage.setItem('userInfo',JSON.stringify(data))

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);
