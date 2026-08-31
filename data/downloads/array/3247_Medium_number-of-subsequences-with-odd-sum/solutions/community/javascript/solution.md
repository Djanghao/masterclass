# JavaScript Easy Solution

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5609922/](https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5609922/)

---

# Intuition
If there are no odd numbers, the answer is 0. Otherwise, it is 2 ** (n - 1).
# Approach
Let x be the number of odds, and y be the number of evens. As long as x !== 0, the answer is (C(x, 1) + C(x, 3) + ... + C(x, x)) * (2 ** y). That is simply (2 ** (x - 1)) * (2 ** y) = 2 ** (n - 1).
And we can use recursion the reduce the calculation of power.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(lgn)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceCount = function(nums) {
    if (nums.find(x => (x & 1) === 1) === undefined)  return 0


    const modMe = BigInt(10 ** 9 + 7)
    function pow(x) {
        if (x === 0n)    return 1n

        const half = x / 2n
        const subresult = pow(half)
        let result = subresult ** 2n
        if (x % 2n === 1n)  result *= 2n

        result %= modMe
        return result
    }


    const result = Number(pow(BigInt(nums.length - 1)))
    return result
};
```