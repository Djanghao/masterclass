# Javascript solution - 98% faster

**Author:** Whiskey022
**Votes:** 22
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/379872/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/379872/)

---

```
var removeOuterParentheses = function(S) {
    let parenthesCount = 0;
    let result = "";
    
    for (const letter of S) {
        if (letter === "(") {
            if (parenthesCount) {
                result += letter;
            }
            parenthesCount++;
        } else {
            parenthesCount--;
            if (parenthesCount) {
                result += letter;
            }
        }
    }
    
    return result;
};
```