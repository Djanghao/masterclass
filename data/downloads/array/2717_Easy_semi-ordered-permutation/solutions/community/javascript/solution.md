# Long but easy solution :)

**Author:** Movsar
**Votes:** 8
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/3594970/](https://leetcode.com/problems/semi-ordered-permutation/solutions/3594970/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const semiOrderedPermutation = function (nums) {
    const n = nums.length
    if (nums[0] === 1 && nums[n - 1] === n) return 0
    
    let cn = 0
    
    let i = nums.indexOf(1)
    while (nums[0] !== 1 && i >= 0) {
        const curr = nums[i - 1]
        
        nums[i - 1] = nums[i]
        nums[i] = curr
        
        i -= 1
        cn += 1
    }
    
    if (nums[0] === 1 && nums[n - 1] === n) return cn
    i = nums.indexOf(n)
    while (nums[n - 1] !== n && i < n) {
        const curr = nums[i]
        
        nums[i] = nums[i + 1]
        nums[i + 1] = curr
        
        i += 1
        cn += 1
    }
    
    return cn
};
```