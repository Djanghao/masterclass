# JS & TS simple solution using stack

**Author:** JinZihang
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/1859541/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/1859541/)

---

This solution is based on [this solution](http://leetcode.com/problems/remove-duplicate-letters/discuss/977608/Use-stack-to-solve-by-JS-94.89-fast-100-less-memory-with-explaination).

```
function smallestSubsequence(s: string): string {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (stack.indexOf(char) > -1) continue;
        
        while (stack.length > 0 
               && stack[stack.length - 1] > char 
               && s.indexOf(stack[stack.length - 1], i) > i) stack.pop();
        
        stack.push(char);
    }
    
    return stack.join("");
};
```