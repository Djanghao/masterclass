# Best Approach💯

**Author:** adwxith
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4970690/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4970690/)

---

# Please consider upvoting if the solution was useful\uD83E\uDEE1

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    
    let maxdepth=0,depth=0
    for (let i=0; i< s.length;i++){
        if(s[i]==='('){
            depth++
        }else if(s[i]===')'){
            depth--
        }
        maxdepth=Math.max(maxdepth,depth)
    }
    return maxdepth
};
```
# Please consider upvoting if the solution was useful\uD83E\uDEE1