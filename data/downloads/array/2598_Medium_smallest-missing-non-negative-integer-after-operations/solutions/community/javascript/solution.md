# Using Frequency Map and Mod

**Author:** user9601U
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3317686/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3317686/)

---

# Intuition
1. Calculate remainder values for each Integer. If number is less than 0 then add it with value. EX: [-3, 0], value: 4 -> Ans: 2 -> Because 0 is present, -3 +4 = 1 is present.
2. Calculate Frequency Map and get the least possible value which cannot be made.   


# Complexity
- Time complexity: O(n)


- Space complexity: O(n)

# Code
```
/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    nums = nums.map(num => {
        const val = num % value;
        if (val < 0) return val + value
        return val;
    });
            
    const freq = {};
    
    for (const num of nums) {
        if (freq[num]) freq[num]++;
        else freq[num] = 1;
    }
        
    let cur = 0;
    let res = Infinity;
    
    while(cur < value) {
        if (freq[cur] === undefined) return cur;
        let missing = (freq[cur] * value) + cur;
        res = Math.min(res, missing);
        cur++;
    }

    return res;
};




```