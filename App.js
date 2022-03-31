import React, { useState } from 'react';
import Header from "./Header.js";
import Body from "./Body.js";
import Tweet from './Tweet.js';
import SearchBar from './SearchBar.js';
import { Link } from "react-router-dom";



// parameters, called props in Javascript

function App() {
  const [author, setAuthor] = useState("");
  const [pic, setProfilePic] = useState("")
  const [tag, setTag] = useState("")
  const [content, setContent] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const[tweets, setTweets] = useState([]);
  const[search, setSearch] = useState("");
  return (
    <div>
      <div>
        <Header />
      </div>
      <Link to="/profiles">Profile</Link>
      <div style={{ textAlign: 'center' }}>
        <SearchBar Bar search={search} setSearch={setSearch}/> 
        </div>
        <div>
        <input value ={author} placeholder = "Author Name"onChange={e => setAuthor(e.target.value)}/>
        <input value ={pic} placeholder = "Profile Pic URL" onChange={e => setProfilePic(e.target.value)}/> 
        <input value ={tag} placeholder = "Twitter Tag" onChange={e => setTag(e.target.value)}/>
        <input value ={content} placeholder = "Content" onChange={e => setContent(e.target.value)}/>
        <input value ={time} placeholder = "Time" onChange={e => setTime(e.target.value)}/>
        <input value ={date} placeholder = "Date" onChange={e => setDate(e.target.value)}/>
        <button onClick={()=> 
          {setTweets(
            [...tweets, {author: author, pic: pic, tag: tag, content: content, time: time, date: date}])
          }
            }>Create Tweet</button>
        {tweets.filter((t,i) => t.content.includes(search)).map((tweet,i) => (<Tweet author = {tweet.author} pic={tweet.pic} tag={tweet.tag} content={tweet.content} time={tweet.time} date={tweet.date} key={i}/>))}
        <Tweet pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzid9SRhkmP36DaYUwqBItCgg8uY5tpA9OA&usqp=CAU" tag="kabob" content="first tweet" author="kaukab" time="8:20 pm" date="Feb 27, 2022" likes = "0" retweets="2"/>
        <Tweet pic="data:image/jpeg;base64,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" tag="jack" content="just setting up my twttr" author="jack" time="8:50 pm" date="Mar 21, 2006" likes = "0" retweets="0"/>
      </div>

      <div>
        <Body />
      </div>

    </div>
    
  );
}

export default App;