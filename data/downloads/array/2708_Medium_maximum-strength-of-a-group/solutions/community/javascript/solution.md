# JS: O(n * log(n)) - tc, On - sc

**Author:** Movsar
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568786/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568786/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxStrength = function(nums) {
    nums.sort((a, b) => a - b)
    
    const negatives = nums.filter(num => num < 0)
    const positives = nums.filter(num => num > 0)
    
    const negCount = negatives.length
    const posCount = positives.length

    if (posCount === 0 && negCount === 0) return 0
    if (posCount === 0 && negCount === 1) return nums[nums.length - 1]
    
    let res = 1
    
    if (negCount % 2 === 0) {
        for (const num of negatives) {
            res *= num
        }
        
        for (const num of positives) {
            res *= num
        }
    } else {
        for (let i = 0; i < negCount - 1; i++) {
            const num = negatives[i]
            res *= num
        }
        
        for (const num of positives) {
            res *= num
        }
        
    }
    
    return  res
    
};
```