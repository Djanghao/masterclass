# Javascript-Time O(N)

**Author:** kasidi
**Votes:** 5
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2761078/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2761078/)

---

```
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;
    for (let n of nums) {
        if (n % 6 === 0) {
            sum += n;
            count++;
        }
    }
    return sum === 0 ? sum : Math.floor(sum / count);
};
```