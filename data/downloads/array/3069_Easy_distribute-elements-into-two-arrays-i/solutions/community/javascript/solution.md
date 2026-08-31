# easy to understand JS

**Author:** javad_pk
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5014791/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5014791/)

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
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(n) {
    let a=[n[0]]
    let b=[n[1]]
    for(let i=2;i<n.length;i++){
        a[a.length-1]>b[b.length-1]? a.push(n[i]):b.push(n[i])
    }
    return a.concat(b)
};
```