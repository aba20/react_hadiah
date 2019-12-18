import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Gifts
export const getAllGifts = function() {
  return axios.get(`${apiUrl}/gifts`);
}

// Delete Gift By ID
export const deleteGiftByID = function(id) {
  return axios.delete(`${apiUrl}/gifts/${id}`);
}

export const updateGiftByID = function(id) {
  return axios.patch(`${apiUrl}/gifts/${id}`);
}