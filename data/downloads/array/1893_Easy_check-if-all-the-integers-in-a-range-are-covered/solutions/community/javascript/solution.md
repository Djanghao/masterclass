# simple solution

**Author:** adwxith
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4259110/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/4259110/)

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
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    for(let i=left;i<=right;i++){
        let flag=0
        for(let j=0;j<ranges.length;j++){
            if(ranges[j][0]<=i && ranges[j][1]>=i){
                flag=1
                break;
            }
        }
        if(!flag) return false
    }
    return true
};
```