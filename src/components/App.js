import React, { Component } from 'react';
import { Repositories } from './Repositories';
import { axiosGitHubGraphQL } from '../Utils/API';
import { GET_ORGANIZATION } from '../Utils/Query';
import '../assets/css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repositories: null,
      errors: null,
    }
  }

  onFetchFromGitHub = () => {
    axiosGitHubGraphQL.post('', { query: GET_ORGANIZATION })
      .then(result => {
        let { data: { data: { viewer: { repositories: { nodes } } } } } = result;
        this.setState(() => ({
          repositories: nodes,
          errors: result.data.errors,
        }))
      });
  };

  componentDidMount() {
    this.onFetchFromGitHub();
  }

  render() {
    const { repositories, errors } = this.state;

    return (
      <div className="App">
        <main id="work">
          <h1 className="lg-heading">React <span className="text-secondary">GraphQL GitHub </span></h1>
          <h2 className="sm-heading">Check out some of my repositories...</h2>
          <div className="projects">
            {repositories ? (<Repositories repositories={repositories} errors={errors} />) : (<p>No information yet ...</p>)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
