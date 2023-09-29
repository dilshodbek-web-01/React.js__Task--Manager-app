import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';

const UserItem = () => {

    const [user, setUser] = useState({});
    const [load, setLoad] = useState(false);

    const { id } = useParams();
    const goback = useNavigate();


    useEffect(() => {
        api.getUserItem(id).then((item) => {
            setUser(item);
            setLoad(true);
        });
    }, [id]);

    const { username, age } = user;

    return (
        <div className='p-5 m-5 w-75 mx-auto shadow-lg'>
            {load ?
                <>
                    <h1>usename: {username}</h1>
                    <h2>age: {age}</h2>
                </> : <>

                    <p className="placeholder-glow">
                        <span className="placeholder col-12"></span>
                    </p>

                    <p className="placeholder-wave">
                        <span className="placeholder col-12"></span>
                    </p>

                </>
            }
            <button className="btn btn-primary" onClick={() => goback(-1)}>go back</button>
        </div>
    );
};

export default UserItem;