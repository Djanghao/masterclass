# Simple JS solution O(n log(n))

**Author:** babec
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650585/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650585/)

---

# Intuition
To get the best result min value of first array should be as close as possible to max value of second array.

Since we are free to adjust the order, it's safe to assume that any number can be made either max of one array or min of another.

Knowing that, we can check any possible pair.

Out of all possible pairs, the most suitable ones are adjacent numbers of sorterd array.

# Approach
Sort the array
Get the smallest absolute difference between two adjacent numbers.

# Complexity
- Time complexity: O(n log(n))

- Space complexity: O(1)

# Code
```
var findValueOfPartition = function(nums) {
    nums.sort((a,b) => a-b)
    let res = Infinity
    
    for (let i=0; i<nums.length-1; i++) {
        const diff = Math.abs(nums[i] - nums[i+1])
        if (diff < res) {
            res = diff
        }
    }
    
    return res
};
```