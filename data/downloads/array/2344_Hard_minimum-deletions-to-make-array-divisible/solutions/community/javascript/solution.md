# Javascript 6 lines

**Author:** SmittyWerbenjagermanjensen
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2300246/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2300246/)

---

Inspired by [lee215's solution](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/discuss/2292651/JavaC%2B%2BPython-GCD-O(n-%2B-m-%2B-log))
```
const minOperations = (nums, numsDivide) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    const g = numsDivide.reduce(gcd)
    
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length && nums[i] <= g; i++)
        if (g % nums[i] === 0) return i
    
    return -1
}