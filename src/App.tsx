import { useState } from 'react';

export default function Twitter() {
  type tweetContainer = {user: string, text: string};
  const post2:tweetContainer = {user:"B", text:"This is a sample tweet!"}
  const post1:tweetContainer = {user:"C", text:"Another example of a tweet."}
  const [tweetList, setTweetList] = useState([post1, post2]);  

  function submit() {
   //var inputText = document.getElementById("submitText").value;
    //setTweetText([...tweetText, ["A", inputText]]);
    //document.getElementById("submitText").value = "";
  }

  const board = tweetList.map((posts, num) => {
    return (
      <div className="post" key={num}>
        <a href="#"><div className="userIcon">{posts.user}</div></a>
        <div className="postText">
          <a href="#"><p className="userName">{posts.user}</p></a>
          <p className="text">{posts.text}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <main>
      <div className="tweet">
        <a href="#"><div className="userIcon">A</div></a>
        <input type="text" placeholder="What's happening?" id="submitText"></input>
        <button onClick={submit}>Tweet</button>
      </div>
      <div className="board">
        {board}
      </div>
      </main>
    </>
  );
}
