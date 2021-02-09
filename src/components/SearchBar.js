import React, { useState } from "react";
import Error from './Error'


import "../styles.css"

const SearchBar = ({ saveSearch, saveCounterRel, counterRel, count }) => {
    const [term, saveTerm] = useState('');
    const [counter, saveCounter] = useState(0);
    const [error, saveError] = useState(false);
    const [errorMsg, saveErrorMsg] = useState('');

    const searchGifs = e => {
        e.preventDefault();

        if (term.trim() === '') {
            saveError(true);
            saveErrorMsg('Must include a search term');
            return;

        }

        saveCounterRel(0);
        saveCounter(0);
        saveError(false);
        saveSearch(term);
    }

    const minusCounter = e => {
        e.preventDefault();
        saveError(false);
        const total = counterRel > counter ? count - 1 : counter - 1;

        if (total <= 0) {
            saveError(true);
            if (count > 0) {
                saveCounter(1);
                saveCounterRel(1);
            } else {
                saveCounter(0);
                saveCounterRel(0);
                saveErrorMsg('There are no results for the search.');
                return;
            }

            saveErrorMsg('You cannot select zero or negative numbers.');
            return;
        }
        saveCounter(total)
        saveCounterRel(total);

    }

    const addCounter = e => {
        e.preventDefault();

        const total = counterRel > counter ? count + 1 : counter + 1;
        console.log('count', count)
        if (count.length === 0 && term === '') {
            saveCounter(0);
            saveCounterRel(0);
            saveError(true);
            saveErrorMsg('There are no results for the search.');
            return;
        } else if (total > count) {
            saveError(true);
            saveErrorMsg('The maximum of the result has been loaded');
            return;
        }

        saveError(false);
        saveCounter(total);
        saveCounterRel(total);
    }

    return (
        <div className="search-component">
            {error ? <Error message={errorMsg} /> : null}
            <div className="row">
                <div className="col-md-8" >
                    <form
                        onSubmit={searchGifs}
                    >
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Search Gif"
                                    onChange={e => saveTerm(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <input
                                    type="submit"
                                    className="btn btn-lg btn-danger btn-block"
                                    value="Search"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="counter">
                        <button onClick={minusCounter}>-</button>
                        <span> {counterRel >= 5 && counter === 0 ? saveCounter(5) : counterRel > 0 ? counterRel : counter}  </span>
                        <button onClick={addCounter}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;