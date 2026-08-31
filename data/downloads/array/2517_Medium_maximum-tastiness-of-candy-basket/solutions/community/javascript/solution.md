# JS binary search solution, beats 100% on time

**Author:** Mister_CK
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/3825857/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/3825857/)

---

# Intuition
from the constraints we can see that we should use binary search, since the price[i] can be up to a billion. As the search function we can just g through the array collecting candies when the difference is larger or equal to k.


# Complexity
- Time complexity:
O(n log n) log n for the binary search, n for collecting the candies
also sorting is n log n.
- Space complexity:
O(1), we don't use any extra storage other than a couple of variables
# Code
```
/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
    price.sort((a,b) => a-b)
    const getCandies = (mid) => {
        let lastValue = price[0]
        let collected = 1
        for(let i = 1; i < price.length; i++) {
            if (price[i] - lastValue >= mid) {
                lastValue = price[i]
                collected++
            }
            if (collected >= k) return true
        }
        return false
    }
    let left = 0;
    let right = 10 ** 9
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        if (getCandies(mid)) left = mid + 1
        else right = mid - 1
        mid = Math.floor((left + right) / 2)
    }
    return mid
};
```