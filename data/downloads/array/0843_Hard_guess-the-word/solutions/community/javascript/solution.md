# JavaScript Minimax solution

**Author:** Hongbo-Miao
**Votes:** 9
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/413631/](https://leetcode.com/problems/guess-the-word/solutions/413631/)

---

JavaScript version of 
https://leetcode.com/problems/guess-the-word/discuss/133862/Random-Guess-and-Minimax-Guess-with-Comparison
Definately read that post first.

```
function findSecretWord(wordlist, master) {
  function match(a, b) {
    let matches = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) matches++;
    }
    return matches;
  }

  for (let i = 0, n = 0; i < 10 && n < 6; i++) {
    const count = {};
    for (const w1 of wordlist) {
      for (const w2 of wordlist) {
        if (match(w1, w2) === 0) {
          if (count[w1] == null) count[w1] = 0;
          count[w1]++;
        }
      }
    }

    let minimax = [null, Infinity];
    for (const w of wordlist) {
      if (count[w] == null) count[w] = 0;
      if (count[w] < minimax[1]) {
        minimax = [w, count[w]];
      }
    }

    n = master.guess(minimax[0]);
    const wordlist2 = [];
    for (const w of wordlist) {
      if (match(minimax[0], w) === n) {
        wordlist2.push(w);
      }
    }
    wordlist = wordlist2;
  }
}
```
