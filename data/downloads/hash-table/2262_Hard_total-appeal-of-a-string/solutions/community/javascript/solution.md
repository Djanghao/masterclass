# javascript last tracking 144ms

**Author:** henrychen222
**Votes:** 4
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996584/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996584/)

---

```
const ord = (c) => c.charCodeAt();

const appealSum = (s) => {
    let last = Array(26).fill(0), res = 0;
    for (let i = 0; i < s.length; i++) {
        last[ord(s[i]) - 97] = i + 1;
        for (let j = 0; j < 26; j++) res += last[j];
    }
    return res;
};
```