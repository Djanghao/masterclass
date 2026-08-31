# Sort + 2 pointers

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3333896/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3333896/)

---

# Intuition
Sort the array and find every possible higher element for each element.

# Approach
Sort the array. Create two  pointers. For every possible element find higher one.

# Complexity
- Time complexity:
O(N*Log(N))

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a,b) => a - b)
    let res = 0;
    let j = 1;
    for(let i = 0; i < nums.length; i++){
        while(j < nums.length && nums[j] <= nums[i]){
            j++;
        }
        if(j < nums.length && nums[j] > nums[i]){
            j++;
            res++;
        }
    }
    
    return res
};
```