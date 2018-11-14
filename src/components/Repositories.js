import React from 'react';
import logo from '../assets/images/project.jpg';

export const Repositories = ({ repositories, errors }) => {
    if (errors) {
        return (
            <p>
                <strong>Something went wrong:</strong>
                {errors.map(error => error.message).join(' ')}
            </p>
        );
    }

    return (
        repositories && repositories.map((repository, key) => {
            return (
                <div className="item" key={key}>
                    <a href={repository.url}>
                        <img src={logo} alt="Project" />
                    </a>
                    <a href={repository.url} rel="noopener noreferrer" className="btn-light" target="_blank">
                        <i className="fas fa-eye"></i> {repository.name}
                    </a>
                    <a href={repository.url} rel="noopener noreferrer" className="btn-dark" target="_blank">
                        <i className="fab fa-github"></i>
                        Github
                        </a>
                </div>
            )
        })
    );
};