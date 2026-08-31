# Solution for this problem.

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/5073534/](https://leetcode.com/problems/reverse-pairs/solutions/5073534/)

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
var reversePairs = function(nums) {
    let count = 0;
    
    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        
        let j = 0;
        for (let i = 0; i < left.length; i++) {
            while (j < right.length && left[i] > 2 * right[j]) {
                j++;
            }
            count += j;
        }
        
        return merge(left, right);
    };
    
    const merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        
        return result;
    };
    
    mergeSort(nums);
    
    return count;
};

```