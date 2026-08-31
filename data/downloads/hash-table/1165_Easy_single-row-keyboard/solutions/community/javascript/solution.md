# JavaScript solution with explanation

**Author:** ecgan
**Votes:** 7
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/365897/](https://leetcode.com/problems/single-row-keyboard/solutions/365897/)

---

The idea: 

1. generate a map of `{ character: index }` so that you can get the position of a character on the keyboard in O(1) time.
2. loop through each character of `word` and calculate the finger travelling time with the help of the map object.

```javascript
const getMap = (keyboard) => {
  const map = {}

  for (let i = 0; i < keyboard.length; i++) {
    const char = keyboard[i]
    map[char] = i
  }

  return map
}

const getTime = (map, word) => {
  let curPos = 0
  let time = 0
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    const charPos = map[char]
    time += Math.abs(charPos - curPos)
    curPos = charPos
  }

  return time
}

const calculateTime = (keyboard, word) => {
  const map = getMap(keyboard)

  return getTime(map, word)
}

module.exports = calculateTime
```

Complexity Analysis:

`keyboard`'s length is always constant at 26, so we can ignore that. Assume `n` is the number of characters in `word`.

Time complexity: O(n) since we need to loop through all characters in `word`.

Space complexity: O(1). Extra space used is always the same regardless of `word`.
