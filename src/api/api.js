export const options = (muscle) => {
  //THIS IS PRIVATE KEY AND PASTED HERE JUST FOR TESTING

  return {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '4345afd4fdmsh30eea1bb54bc723p1e8ee8jsn6f565b16214d',
    },
  };
};
