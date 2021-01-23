import react, { useState, useEffect, createElement } from "react";
import "./App.css";
import Text from "./Components/Text";
import Welcome from "./Components/Welcome";
import { useSelector, useDispatch } from "react-redux";
import { gallery } from "./actions";
import { text } from "./actions";
import { tweets } from "./actions";

function App() {
  const reply = useSelector((state) => state);
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");
  const [botContent, setBotContent] = useState([<Welcome />]);

  function handleChange(e) {
    setTextValue(e.target.value);
  }

  function submitfunc(e) {
    e.preventDefault();
    var texts = <Text name={textValue} />;
    setBotContent(botContent.concat(texts));
    if (textValue === "hello") {
      dispatch(text());
      setBotContent(botContent.concat(texts, reply));
      setTextValue("");
    }
    if (textValue === "yes" || textValue == "show gallery" || textValue=="show me my gallery") {
      dispatch(gallery());
      setBotContent(botContent.concat(texts, reply));
      setTextValue("");
    }
    if (textValue === "show tweets" || textValue === "show me my social media updates") {
      dispatch(tweets());
      setBotContent(botContent.concat(texts));
      setTextValue("");
    }
  }
  function fetchWord(e) {
    console.log(e.target);
    var x = e.target.innerHTML;
    setTextValue(x);
  }

  return (
    <>
      <div class="chat">
        <div class="chat-title">
          <h1>react bot</h1>
          <figure class="avatar">
            <img src="/logo192.png" />
          </figure>
        </div>
        <div class="messages">
          <div class="messages-content">
            <>
              {botContent.map((u) => (
                <>{u}</>
              ))}

              {reply}
            </>
          </div>
          <div class="suggession"></div>
        </div>
        <div className="suggest">
          <p class="cursor" onClick={fetchWord}>
            show gallery
          </p>

          <p class="cursor" onClick={fetchWord}>
            hello
          </p>

          <p class="cursor" onClick={fetchWord}>
            show tweets
          </p>

          <p class="cursor" onClick={fetchWord}>
            yes
          </p>
        </div>
        <form
          onSubmit={submitfunc}
          class="message-box"
          id="mymsg"
          method="POST"
        >
          <input
            type="text"
            id="MSG"
            name="MSG"
            class="message-input"
            placeholder="Type message..."
            value={textValue}
            onChange={handleChange}
          />

          <button type="submit" class="message-submit">
            Send
          </button>
        </form>
        <div class="message message-personal"></div>
      </div>
    </>
  );
}
export default App;
