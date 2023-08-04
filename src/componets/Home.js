import React, { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
    const [quote, setQuote] = useState('With great power comes great responsibility.')
    const [author, setAuthor] = useState('Uncle Ben')
    const [category, setCategory] = useState('')

    const handleOnChange = (e) => {
        setCategory(e.target.value)
    }

    useEffect(() => {
        if (category === 'random') {
            setCategory('')
        }
    }, [category])

    const quoteRequest = async () => {
        const api = `https://api.api-ninjas.com/v1/quotes?category=${category}`

        const response = await fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_API_KEY
            }
        })

        const data = await response.json()
        setQuote(data[0].quote);
        setAuthor(data[0].author);
    }
    return (
        <>
            <div className="container">
                <div className="title_div">
                    <h1>QuoteHub</h1>
                </div>

                <div className="content">
                    <div className="quote_data">
                        <div className="top_dquote">
                            <i className="fa-solid fa-quote-left"></i>
                        </div>

                        <div className="quote_div">
                            <p>{quote}</p>
                        </div>

                        <div className="bottom_dquotes">
                            <i className="fa-solid fa-quote-left"></i>
                        </div>
                    </div>
                    <div className="quote_author_div">
                        <p>~ {author}</p>
                    </div>
                </div>

                <div className="generate_btn_div">
                    <select className='select_category' value={category} onChange={handleOnChange}>
                        <option value="random">Random</option>
                        <option value="love">Love</option>
                        <option value="life">Life</option>
                        <option value="happiness">Happiness</option>
                        <option value="success">Success</option>
                        <option value="family">Family</option>
                        <option value="friendship">Friendship</option>
                        <option value="health">Health</option>
                        <option value="money">Money</option>
                        <option value="education">Education</option>
                        <option value="dreams">Dreams</option>
                        <option value="faith">Faith</option>
                        <option value="hope">Hope</option>
                        <option value="inspirational">Inspirational</option>
                        <option value="imagination">Imagination</option>
                        <option value="art">Art</option>
                        <option value="knowledge">Knowledge</option>
                        <option value="leadership">Leadership</option>
                        <option value="future">Future</option>
                        <option value="history">History</option>
                        <option value="humor">Humor</option>
                        <option value="communication">Communication</option>
                        <option value="business">Business</option>
                        <option value="courage">Courage</option>
                        <option value="attitude">Attitude</option>
                        <option value="forgiveness">Forgiveness</option>
                        <option value="freedom">Freedom</option>
                        <option value="environment">Environment</option>
                        <option value="equality">Equality</option>
                        <option value="creativity">Creativity</option>
                        <option value="wisdom">Wisdom</option>
                        <option value="inspirational">Inspirational</option>
                        <option value="design">Design</option>
                        <option value="architecture">Architecture</option>
                        <option value="intelligence">Intelligence</option>
                        <option value="funny">Funny</option>
                        <option value="government">Government</option>
                        <option value="technology">Technology</option>
                        <option value="food">Food</option>
                        <option value="movies">Movies</option>
                        <option value="computers">Computers</option>
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="travel">Travel</option>
                        <option value="beauty">Beauty</option>
                        <option value="art">Art</option>
                        <option value="justice">Justice</option>
                        <option value="career">Career</option>
                        <option value="science">Science</option>
                        <option value="exploration">Exploration</option>
                        <option value="humanity">Humanity</option>
                    </select>
                    <button onClick={quoteRequest}>Generate Quote</button>
                </div>

            </div>
                <div className="footer_container">
                    <p>Quote Generator by Mitul Gohil 🚀</p>
                </div>
        </>
    )
}
