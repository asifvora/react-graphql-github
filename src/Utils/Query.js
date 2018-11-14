const GET_ORGANIZATION = `
  {
    viewer {
      name
       repositories(last: 5) {
         nodes {
           name,
           description,
           url,
         }
       }
     }
  }
`;

export { GET_ORGANIZATION };