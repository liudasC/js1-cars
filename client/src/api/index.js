const requestOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
};

const domain = 'http://localhost:5000';

export const getCars = async (success, failure) => {
  try {

    const res = await fetch(domain + '/cars', requestOptions);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message)
    success(data);
  } catch ({ message }) {
    failure(message);
  }
}

export const postCar = async (body, success, failure) => {
  try {
    const res = await fetch(domain + '/cars', {
      method: 'POST',
      ...requestOptions,
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message)
    success(data);
  } catch ({ message }) {
    failure(message);
  }
}

export const updateCar = async (id, body, success, failure) => {
  try {
    const res = await fetch(domain + `/cars/${id}`, {
      method: 'PATCH',
      ...requestOptions,
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message)
    success(data);
  } catch ({ message }) {
    failure(message);
  }
}

export const deleteCar = async (id, success, failure) => {
  try {
    const res = await fetch(domain + `/cars/${id}`, {
      method: 'DELETE',
      ...requestOptions,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message)
    success(data);
  } catch ({ message }) {
    failure(message);
  }
}

const API = {
  getCars,
  postCar,
  updateCar,
  deleteCar
};

export default API;