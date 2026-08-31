# JavaScript Straight forward Beats 97%

**Author:** ChaoWan_2021
**Votes:** 3
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/535739/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/535739/)

---

```
var indexPairs = function(text, words) {
    const res = [];
    for(let i = 0; i < text.length; i++) {
        words.forEach(word => {
		// check the first letter to make it faster
            if(word[0] === text[i] && word === text.slice(i, i + word.length)) {
                res.push([i, i + word.length - 1])
            }
        })
    }
    return res.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
};
```