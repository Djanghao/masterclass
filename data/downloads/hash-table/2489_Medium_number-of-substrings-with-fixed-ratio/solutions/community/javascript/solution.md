# [Javascript] Prefix Count O(n)

**Author:** umopepisdn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861119/](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861119/)

---

```
var fixedRatio = function(s, num1, num2) {
    const counts = {0: 1};
    let zeros = 0;
    let res = 0;
    for (let i=0;i<s.length;i++) {
        if (s.charAt(i)==='0') zeros++;
        const curr = zeros * (num1+num2) - (i+1)*num1;
        res += (counts[curr] || 0);
        counts[curr] = (counts[curr] || 0) + 1;
    }
    return res;
};
```