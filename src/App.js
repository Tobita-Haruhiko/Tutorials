import { useState } from 'react';

export default function Twitter() {
  const post2 = ["B", "This is a sample tweet!"];
  const post1 = ["C", "Another example of a tweet."]; 
  const [tweetText, setTweetText] = useState([post1, post2]);

  function submit() {
    var inputText = document.getElementById("submitText").value;
    setTweetText([...tweetText, ["A", inputText]]);
    document.getElementById("submitText").value = "";
  }

  const board = tweetText.map((texts, num) => {
    return (
      <div className="post" key={num}>
        <a href="#"><div className="userIcon">{texts[0]}</div></a>
        <div className="postText">
          <a href="#"><p className="userName">{texts[0]}</p></a>
          <p className="text">{texts[1]}</p>
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

