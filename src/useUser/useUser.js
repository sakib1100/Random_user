import React, { useEffect, useState } from 'react';

const useUser = (url) => {

    const [user,setUser] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    return user;
};

export default useUser;