# Efficient JS Solution

**Author:** hbjORbj
**Votes:** 3
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/1249986/](https://leetcode.com/problems/armstrong-number/solutions/1249986/)

---

```
var isArmstrong = function(n) {
    let x = 10, k = 1;
    while (n >= x) {
        x *= 10;
        k += 1;
    }
    x = n;
    let sum = 0;
    while (x > 0) {
        let rightMost = x % 10;
        sum += Math.pow(rightMost, k);
        x = Math.floor(x / 10);
    }
    return sum === n;
    // T.C: O(1)
    // S.C: O(1)
};
```