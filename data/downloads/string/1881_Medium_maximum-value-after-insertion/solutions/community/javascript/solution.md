# javascript greedy 116ms

**Author:** henrychen222
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/1240449/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/1240449/)

---

```
const maxValue = (s, x) => {
    let neg = false;
    if (s[0] == '-') {
        neg = true;
        s = s.slice(1); // if neg, remove '-'
    }
    let xs = x + '';
    let n = s.length;
    if (neg) { // neg, make min
        for (let i = 0; i < n; i++) {
            if (xs < s[i]) {
                return '-' + s.slice(0, i) + xs + s.slice(i);
            }
        }
        return '-' + s + xs;
    } else { // pos, make max
        for (let i = 0; i < n; i++) { // wanna make max, search from higher position, if larger than next position, insert it will be max
            if (xs > s[i]) {
                return s.slice(0, i) + xs + s.slice(i);
            }
        }
        return s + xs; // not found, add to the end
    }
};
```