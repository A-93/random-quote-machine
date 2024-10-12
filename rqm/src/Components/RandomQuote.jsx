import React, { useState, useEffect } from 'react'
import "./RandomQuote.css"
import reload from "./logos/reload.png"
import twitter from "./logos/twitter.png"

const RandomQuote = () => {
    //const data = []

    const [quote, setQuote] = useState({
        quote: "Quote",
        author: "Author"
    })
        
    async function getQuotes() {
        const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const data = await response.json()
        console.log(data.quotes[Math.floor(Math.random() * data.quotes.length)])
        setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)])
    }

    /*  const random = () => {
        const grab = data[Math.floor(Math.random() * data.quotes.length)];
        setQuote(grab)
    } */

    useEffect(() => {
        getQuotes();
    }, []);  

   // getQuotes();
    return (
        <div id="quote-box" className="wrapper">
            <div id="text" className="quote">{quote.quote}</div>
            <div>
            <div className="separation"></div>
            <div className='bottom-half'>
                <div id="author" className="author">{quote.author}</div>
                <div className="logos">
                <img src={reload} onClick={()=>{getQuotes()}} alt="reload-icon" id="new-quote" width="50px" height="50px"/>
                <a href={`http://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`} id="tweet-quote" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter-icon" width="50px" height="50px" /></a> 
                </div>
            </div>
            </div>
            
            

        </div>
    )
}

export default RandomQuote