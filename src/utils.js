const URL = 'https://mighty-wave-06924.herokuapp.com/';

export const getFriends = async () => {
    const resp = await fetch(`${URL}friends`);
    const data = await resp.json();
    return data;
};

// The function below should have an id in place of the integer in the curly braces.
//  Right now placing "id" inside the braces breaks the app.

export const getFriend = async () => {
    const resp = await fetch(`${URL}/friends/${0}`);   
    const data = await resp.json();
    return data;
};

export const getShirtColor = async () => {
    const resp = await fetch(`${URL}/friends`);
    const data = await resp.json();
    return data;
};



