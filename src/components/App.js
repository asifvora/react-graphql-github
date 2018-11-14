import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Repositories } from './Repositories';
import { axiosGitHubGraphQL } from '../Utils/API';
import { GET_ORGANIZATION } from '../Utils/Query';
import '../assets/css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: 'asifvora',
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

  onChange = event => {
    this.setState({ path: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // fetch data
  };


  render() {
    const { path, repositories, errors } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React GraphQL GitHub
          </p>
        </header>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Show repositories for https://github.com/
            </label>
          <input
            id="url"
            type="text"
            value={path}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>
        {repositories ? (
          <Repositories repositories={repositories} errors={errors} />
        ) : (<p>No information yet ...</p>)}
      </div>
    );
  }
}

export default App;
