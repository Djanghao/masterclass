# Simple JS Solution

**Author:** Akhil1489
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/6121926/](https://leetcode.com/problems/hash-divided-string/solutions/6121926/)

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
```javascript []
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    
    let result = ''

    for(let i = 0; i<s.length ; i+=k){

        let sumHash = 0

        for(let j = i; j<i+k; j++){
            
            sumHash+=s.charCodeAt(j) - 97
        }
        
        result += String.fromCharCode(sumHash%26+97)
    }

    return result
};
```