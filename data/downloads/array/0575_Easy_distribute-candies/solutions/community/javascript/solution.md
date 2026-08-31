# 1-line JavaScript O(n) solution using Set

**Author:** loctn
**Votes:** 32
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/102866/](https://leetcode.com/problems/distribute-candies/solutions/102866/)

---

```
var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};
```