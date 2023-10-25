import React, { useCallback, useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [result, setResult] = useState([]);

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     setSearchInput(e.target.value);    
    //     // fetchData(e.target.value)
    // };
    let timer: NodeJS.Timeout;
    const handleTimeout = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // console.log(e.target.value);
            if (e.target.value) {
                fetchData(e.target.value);
            }
        },1000)
    }, [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        if (!e.target.value) {
            setResult([]);
        }
        handleTimeout(e);
    }

    const fetchData = (input: string) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?q=${input}`)
        .then(response => response.json())
        .then(json => setResult(json))
    }

    return(
        <>
            <section>
            <h1>Search Bar</h1>
            <input
                type="text"
                placeholder="Search here"   
                onChange={handleChange}
                value={searchInput}  />
            </section>
            <ol>
                {result.map((value, index) => {
                    return<li key={index} >{value['title']}</li>
                })}
            </ol>
        </>

    )
}

export default SearchBar