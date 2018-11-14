const GET_ORGANIZATION = `
  {
    viewer {
      name
       repositories(last: 100) {
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