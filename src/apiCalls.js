import axios from 'axios';

async function addUser(values){
  const{firstname,lastname,password,email,dob,gender} = values;
  let result = await axios.post(`http://localhost:3001/register`,{
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
      dob: dob,
      gender: gender
  })
  return result.data;
}

async function login(email,password){
  let response = await axios.post(`http://localhost:3001/login`,{
    email: email,
    password: password
  })
  return response.data;
}

export {addUser,login};
