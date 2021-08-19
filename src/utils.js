const URL = 'https://mighty-wave-06924.herokuapp.com/';

export const getFriends = async () => {
    const resp = await fetch(`${URL}friends`);
    const data = await resp.json();
    return data;
};

export const getFriend = async () => {
    const resp = await fetch(`${URL}/friends`);
    const data = await resp.json();
    return data;
};

export const getShirtColor = async () => {
    const resp = await fetch(`${URL}/friends`);
    const data = await resp.json();
    return data;
};



