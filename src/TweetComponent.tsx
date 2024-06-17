import { useRef } from 'react';
type tweetContainer = {user: string, text: string};

export const TweetComponent = ({posts, num}:{posts: tweetContainer, num: number}) => {
    const randRef = useRef<number>(Math.floor(Math.random() * 3))

    console.log('num: ' + num + ', rand:' + Number(randRef.current))
    console.log(typeof randRef)

    return (
      <div className={'color' + randRef.current}>
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