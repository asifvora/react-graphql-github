import React from 'react';

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
        <div>
            {repositories && repositories.map((repository, key) => {
                return (
                    <ul key={key}>
                        <li>Name : {repository.name}</li>
                        <li>Description : {repository.description}</li>
                        <li>Url :<a href={repository.url} target="_blank">{repository.url}</a></li>
                    </ul>
                )
            })}
        </div>
    );
};