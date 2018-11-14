import axios from 'axios';

const axiosGitHubGraphQL = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
            }`,
    },
});

export { axiosGitHubGraphQL };