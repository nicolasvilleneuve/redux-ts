import {useState} from "react";
import React from "react";


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(event => setTerm(event.target.value))}/>
                <button> Search </button>
            </form>
        </div>
    );
};

export default RepositoriesList;