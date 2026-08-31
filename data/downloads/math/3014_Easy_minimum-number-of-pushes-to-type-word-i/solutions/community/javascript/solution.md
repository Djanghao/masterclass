# Best Approach💯

**Author:** adwxith
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4799177/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4799177/)

---

# Please consider upvoting if the solution was  useful\uD83E\uDEE1

# Complexity
- Time complexity:
O(m/8) m is length of string ; which simplifies to =>O(m)

- Space complexity:
O(1)

# Code
```
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n= word.length,keyPress=0,f=1
    while(n!==0){
        
        if(n<=8){
            return keyPress+(n*f)
        }

        n-=8
        keyPress+=8*f
        f++
        
    }
};
```