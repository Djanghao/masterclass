# JavaScript O(n) Fast Solution

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5596798/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5596798/)

---

# Intuition
The core is gcd.
# Approach
1. Calc gcd of nums.
2. Count how many values are gcd.
3. If gcdCount === 0, return 1.
4. Else, return Math.ceil(gcdCount / 2).
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumArrayLength = function(nums) {
    function calcGCD(m, n) {
        if (m > n)  return calcGCD(n, m)
        if (m === 0)    return n
        return calcGCD(n % m, m)
    }
    

    const gcd = nums.reduce(calcGCD)
    const gcdCount = nums.reduce((acc, cur) => acc + Number(cur === gcd), 0)


    if (gcdCount === 0) return 1
    return Math.ceil(gcdCount / 2)
};
```