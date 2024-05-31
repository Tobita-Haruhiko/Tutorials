import { useState } from 'react';

export default function Twitter() {
  const post2 = ["B", "This is a sample tweet!"];
  const post1 = ["C", "Another example of a tweet."]; 
  const [tweetText, setTweetText] = useState([post1, post2]);

  function submit() {
    var inputText = document.getElementById("submitText").value;
    setTweetText([...tweetText, ["A", inputText]]);
  }

  const board = tweetText.map((texts, num) => {
    return (
      <>
        <div className="post">
        <a href="#"><div className="userIcon">{tweetText[num][0]}</div></a>
        <div className="postText">
          <a href="#"><p className="userName">{tweetText[num][0]}</p></a>
          <p className="text">{tweetText[num][1]}</p>
        </div>
      </div>
      </>
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

