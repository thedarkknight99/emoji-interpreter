import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😎": "Smiling Face with Sunglasses"
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
          🚀
        </span>
      </h1>
      <input onChange={emojiHandler} placeholder="enter your emoji🔎" />
      <div className="meaning">{emojiIcon}</div>
      <h3>Select your emoji </h3>
      <p>
        Here are the most used smiley emojis by users
        <span role="img" aria-label={"0x1F60A"}>
          👇
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
