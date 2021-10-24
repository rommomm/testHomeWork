const _arrText = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
];

const _align = ["LEFT", "RIGHT", "LEFT"];

function res3(arrText, align) {
  const limit = 16;
  const result = [];

  function setAlign(string, alignArg) {
    switch (alignArg) {
      case "LEFT":
        return `*${string.padEnd(limit)}*`;
      case "RIGHT":
        return `*${string.padStart(limit)}*`;
      default:
        console.error("Invalid align format");
        break;
    }
  }

  for (let i = 0; i < arrText.length; i++) {
    const phrase = arrText[i].join(" ");
    const phraseLen = phrase.length;

    if (phraseLen <= limit) {
      result.push(setAlign(phrase, align[i]));
    } else {
      let str = "";
      const words = arrText[i];

      for (let j = 0; j < words.length; j++) {
        const lastWord = words[j];
        str += lastWord + " ";

        if (str.length > limit) {
          const part = str.substr(0, str.length - lastWord.length - 2);
          result.push(setAlign(part, align[i]));
          str = lastWord + " ";
        } else if (j === words.length - 1) {
          result.push(setAlign(str.trimEnd(), align[i]));
        }
      }
    }
  }

  const border = "******************";

  result.unshift(border);
  result.push(border);

  return result;
}

console.log(res3(_arrText, _align));
