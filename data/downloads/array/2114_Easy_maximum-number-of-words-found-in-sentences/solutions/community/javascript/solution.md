# JavaScript Solution

**Author:** mandell
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1683428/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1683428/)

---

```
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    let temp = 0;
    for (let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length;
        if (temp > max) {
            max = temp;
        }
    }
    
    return max;
};
```

My first post and contribution to the Discuss section, wanted to do so for an easy question!
Not the fastest solution but the Memory Usage: 40 MB, less than 96.16% of JavaScript online submissions.