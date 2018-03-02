import { func, number } from 'prop-types';

export default {
  decreaseCounter: func.isRequired,
  increaseCounter: func.isRequired,
  count: number.isRequired,
};
