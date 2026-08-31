# fast, short, intuitive JavaScript Solution using sets

**Author:** zeuslawyer
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/434396/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/434396/)

---

Here is a solution that leverages a Set which only contains a word if all the letters in that word, minus the last, are already present in the set, as words.   Faster than ~86% of submissions, as per my machine.

Note: it uses the built in sort function as well as the builtin string.slice() functions. you can also use str.substr(0, str.length-1) , instead of slice.

```JavaScript
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;
};

```
