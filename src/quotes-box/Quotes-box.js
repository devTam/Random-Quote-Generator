import React, {useState, useEffect} from 'react'
import './Quotes-box.css';


const QuotesBox = () => {
    const [quotes, setQuotes] = useState([])

    const fetchData = async () => {
        
        const data = await fetch('https://type.fit/api/quotes');
        const res = await data.json()
        let randomNum = Math.floor(Math.random() * res.length)
        let quote = res[randomNum];
        setQuotes(quote)
        
    }

    useEffect(() => {
        fetchData()
    },[])

    const tweet = `https://twitter.com/intent/tweet?&text=${quotes.text} -${quotes.author}`
    return (  
        <div id="quote-box">
            <i className="fas fa-quote-left"></i>
            <div className="quote">
                <blockquote id="text">
                    {quotes && quotes.text}
                </blockquote>
                 <address id="author">
                    - {quotes && quotes.author}
                 </address>
            </div>

            <div className="quote-nav">
                <a href={tweet} id="tweet-quote" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <button id="new-quote" onClick={fetchData}>New Quote</button>
            </div>
            
        </div>

    )
}

export default QuotesBox;