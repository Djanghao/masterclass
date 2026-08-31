# Typescript O(1) Space Solution (no stack)

**Author:** lolimdumbwataboutu
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4338190/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4338190/)

---

# Intuition

The function makes the true assumption that a '))' must be preceeded by a '(' otherwise it is impossible to be resolved.

Thus if we encounter a ')' or '))' that doesn't have an opening bracket to resolve it, we'll have to add characters to the statement to resolve it which we can `count` below.

# Complexity
- Time complexity: O(N)

- Space complexity: O(1)

# Code
```
function minInsertions(s: string): number {
    let open = 0;
    let count = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i] === '(') {
            open++;
        } else if (s[i] === ')' && s[i+1] === ')') {
            if (open > 0) open--; // resolve with open brace
            else count++; // need one '(' to resolve it
            i++; // skip the next brace so we don't count it again
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;
                count++; // need one more ')' to resolve
            }else{
                count += 2; // need an additional '(' and ')' to resolve
            }
        }
    }
    // we resolve all the open braces with "))" so multiply by 2
    return open * 2 + count;
};
```