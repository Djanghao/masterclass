# easy JS

**Author:** javad_pk
**Votes:** 2
**Link:** [https://leetcode.com/problems/perfect-number/solutions/5184254/](https://leetcode.com/problems/perfect-number/solutions/5184254/)

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
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num==1) return false
    let sum=1
    for(let i=2;i<=num/2;i++){
        if(num%i==0) sum+=i
    }
    return sum==num
};
```