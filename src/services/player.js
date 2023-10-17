
// Third party imports
import axios from 'axios';
import to from 'await-to-js';

// Constant imports
import { constants } from '../constants/constants';

/**
 * submit data
 * @param {Object} player
 * @returns response object
 */
export const submitData = async (player) => {
  const [err, result] = await to(
    axios.post(constants.baseURL + '/submit', player)
  );
  if (err) {
    return err;
  } else {
    return result;
  }
};