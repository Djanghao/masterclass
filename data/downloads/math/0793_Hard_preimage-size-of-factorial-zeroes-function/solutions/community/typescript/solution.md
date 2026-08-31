# Simple Binary search ✅ Beginner Friendly 🔰

**Author:** mayurkadampro
**Votes:** 0
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/4905058/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/4905058/)

---

# Complexity
- Time complexity:
    O(log(k))

- Space complexity:
    O(1)

# Code
```
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
    let left = 0;
    let right = k + 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let count = checkCount(mid);
        if (count > k) {
            right = mid - 1;
        } else if (count < k) {
            left = mid + 1;
        } else {
            return 5
        }
    }
    return 0;
};

function checkCount(mid) {
    let result = mid;
    while (mid > 0) {
        mid = Math.floor(mid / 5);
        result += mid;
    }
    return result
}


```