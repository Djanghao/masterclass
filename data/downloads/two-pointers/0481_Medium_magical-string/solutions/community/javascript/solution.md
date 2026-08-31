# Javascript generate array

**Author:** mokarma
**Votes:** 1
**Link:** [https://leetcode.com/problems/magical-string/solutions/4061724/](https://leetcode.com/problems/magical-string/solutions/4061724/)

---

# Code
```
// T: O(n) | S: O(n)
var magicalString = function(n) {
    const arr = ['1', '2', '2'];
    let i = 0;
    let res = 1;
    while (arr.length < n) {
        let val = i % 2 === 0 ? '1' : '2';
        let isOne = val === '1';
        if (arr[i + 2] === '1') {
            arr.push(val);
            if (isOne) res++;
        } else {
            arr.push(val);
            if (isOne) res++;
            if (arr.length >= n) break;
            arr.push(val);
            if (isOne) res++;
        }
        i++;
    }
    return res;
};
```