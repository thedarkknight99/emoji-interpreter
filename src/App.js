import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ð¤£": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Upside-Down Face",
  "ð": "Smiling Face with Sunglasses"
};

export default function App() {
  const [emojiIcon, setEmojiIcon] = useState("");
  // const [displayEmoji, setDisplayEmoji] = useState("");

  function emojiHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Failed to recognise this emoji";
    }
    setEmojiIcon(meaning);
  }
  //console.log(Object.keys(emojiDictionary))
  function clickEmojiHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setEmojiIcon(meaning);
  }

  return (
    <div className="App">
      <h1>
        Emoji Interpreter
        <span role="img" aria-label={"0x1F60A"}>
          ð
        </span>
      </h1>
      <input onChange={emojiHandler} placeholder="enter your emojið" />
      <div className="meaning">{emojiIcon}</div>
      <h3>Select your emoji </h3>
      <p>
        Here are the most used smiley emojis by users
        <span role="img" aria-label={"0x1F60A"}>
          ð
        </span>
      </p>
      <div>
        {Object.keys(emojiDictionary).map((emoji) => {
          return (
            <span
              className="emojiList"
              onClick={() => clickEmojiHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
