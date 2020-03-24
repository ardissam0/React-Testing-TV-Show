import axios from 'axios';

//Create a directory in the src directory
//move fetchShow from App --> into file fetchShow
//return axios call
export const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        return res;
      })
  };