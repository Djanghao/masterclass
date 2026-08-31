# Very easy js/ts solution using object.

**Author:** amaltscaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/5240588/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/5240588/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function mostFrequent(nums: number[], key: number): number {
    const obj = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === key){
            obj[nums[i+1]] = obj[nums[i+1]] ? obj[nums[i+1]] + 1: 1;
        }
    }
    let max = 0, res = 0;
    for(let i = 0; i < nums.length ; i++){
        if(obj[nums[i]]>max){
            max = obj[nums[i]];
            res = nums[i];
        }
    }
    return res;
};
```