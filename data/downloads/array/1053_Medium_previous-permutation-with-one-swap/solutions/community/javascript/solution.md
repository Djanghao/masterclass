# O(N) JS

**Author:** rumduth
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5573020/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5573020/)

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
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
    let n = arr.length;
    let i = n - 1;
    while(i > 0 && arr[i-1] <= arr[i]) i--;
    if(i === 0) return arr;
        
    let j = i - 1;
    while(i < n && arr[j] > arr[i]) i++;
    i--;
    while(i > 0 && arr[i] == arr[i-1]) i--;
    [arr[j],arr[i]] = [arr[i],arr[j]];
    return arr;
}; 
```