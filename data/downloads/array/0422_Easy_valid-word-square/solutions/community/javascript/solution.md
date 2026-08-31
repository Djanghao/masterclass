# JavaScript easy to understand while loop

**Author:** ChaoWan_2021
**Votes:** 5
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/546423/](https://leetcode.com/problems/valid-word-square/solutions/546423/)

---

```
var validWordSquare = function(words) {
    const length = Math.max(...words.map(m => m.length));
    let i = 0;
    while(i < length) {
        for(let j = 0; j < words.length; j++) {
            if((words[i] && !words[j]) || (words[j] && !words[i])) return false;
            if(words[j][i] !== words[i][j]) return false;
        }
        i++;
    }
    return true;
};
```