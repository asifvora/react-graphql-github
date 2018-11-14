const GET_ORGANIZATION = `
  {
    viewer {
      name
       repositories(last: 50) {
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