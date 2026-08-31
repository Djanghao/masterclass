# Javascript - Greedy

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/2930152/](https://leetcode.com/problems/word-abbreviation/solutions/2930152/)

---

# Code
```
/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function (words) {
  const n = words.length;
  const prefix = new Array(n).fill();
  const ans = new Array(n).fill();

  for (let i = 0; i < n; i++) {
    ans[i] = abbreviate(words[i], 1);
    prefix[i] = 1;
  }

  for (let i = 0; i < n; i++) {
    while (true) {
      const duplicates = [];
      for (let j = i + 1; j < n; j++) {
        if (ans[i] === ans[j]) duplicates.push(j);
      }

      if (duplicates.length === 0) break;

      duplicates.push(i);
      for (const idx of duplicates) {
        prefix[idx]++;
        ans[idx] = abbreviate(words[idx], prefix[idx]);
      }
    }
  }

  return ans;
};

function abbreviate(word, prefixLen) {
  if (prefixLen + 2 >= word.length) return word;

  const front = word.slice(0, prefixLen);
  const middle = word.length - 1 - prefixLen;
  const back = word[word.length - 1];

  return `${front}${middle}${back}`;
}

```