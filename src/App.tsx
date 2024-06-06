import { random } from 'node-forge';
import { useState } from 'react';
import { string } from 'yargs';

export default function Twitter() {
  type tweetContainer = {user: string, text: string};
  const post6:tweetContainer = {user:"X", text:"This is a sample tweet!"}
  const post5:tweetContainer = {user:"Y", text:"This is a sample tweet!"}
  const post4:tweetContainer = {user:"Z", text:"This is a sample tweet!"}
  const post3:tweetContainer = {user:"A", text:"This is a sample tweet!"}
  const post2:tweetContainer = {user:"B", text:"This is a sample tweet!"}
  const post1:tweetContainer = {user:"C", text:"Another example of a tweet."}
  const [tweetList, setTweetList] = useState([post1, post2, post3, post4, post5, post6]); 
  const [Textbox, setTextbox] = useState("");
  const [usernameBox, setUsernameBox] = useState("");

  function submit() {
    const newTweet:tweetContainer = {user:usernameBox, text:Textbox}

    if (!(newTweet.user === "" || newTweet.text === "")) {
      setTweetList([...tweetList, newTweet]);
      setTextbox("");
      setUsernameBox("");
    }else{
      alert("ユーザー名とツイートする文章の両方を入力してください");
    }
  }

  const TweetComponent = ({posts, num}:{posts: tweetContainer, num: number}) => {
    const rand = Math.floor(Math.random() * 3)

    return (
      <div className={'color' + rand} key={num}>
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

  const board = tweetList.map((posts, num) => {
    return(
      <TweetComponent posts={posts} num={num}/>
    )  
  });

  return (
    <>
      <main>
      <div className="tweet">
        <a href="#"><div className="userIcon">{usernameBox.charAt(0)}</div></a>
        <div className='inputs'>
          <input 
            type="text"
            value={usernameBox}
            onChange={e => setUsernameBox(e.target.value)}
            placeholder="Enter username">
          </input>

          <input 
            type="text"
            value={Textbox}
            onChange={e => setTextbox(e.target.value)}
            placeholder="What's happening?">
          </input>
          
        </div>

        <button onClick={submit}>Tweet</button>
      </div>
      <div className="board">
        {board}
      </div>
      </main>
    </>
  );
}