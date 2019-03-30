import axios from 'axios';

const baseAPI = 'https://ten-digit-phone-no-generator.herokuapp.com/phone-numbers';
const routes = [
  baseAPI + '/all-files',
  baseAPI + '/generate'
];

export const getPhoneNumberFiles = async () => {
 return await axios.get(routes[0]);
}

export const generatePhoneNumbers = async (totalofNumbers) => {
  return await axios.post(routes[1], totalofNumbers);
}

export const getFileContent = async (name) => {
  return await axios.get(`${routes[0]}/${name}`);
 }
