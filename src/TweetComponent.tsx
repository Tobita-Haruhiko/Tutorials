import { useState, useRef, useMemo } from 'react';
type tweetContainer = {user: string, text: string};

export const TweetComponent = ({posts, num}:{posts: tweetContainer, num: number}) => {
    const rand = useMemo(() => {return(Math.floor(Math.random() * 3))},[])
    
    console.log('num: ' + num + ', rand:' + Number(rand))

    return (
      <div className={'color' + rand}>
        <div className='post'>
          <a href="#"><div className="userIcon">{posts.user.charAt(0)}</div></a>
          <div className="postText">
            <a href="#"><p className="userName">{posts.user}</p></a>
            <p className="text">{posts.text}</p>
          </div>
        </div> 
      </div>
      );
  }