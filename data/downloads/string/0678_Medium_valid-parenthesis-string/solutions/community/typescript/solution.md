# [TypeScript] Simple solution. (42ms, beats 100%). O(n)|O(1)

**Author:** badnewz
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4987450/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4987450/)

---

# Approach
Track the *balance* of opened and closed parenthesis.
`(` will increase balance, `)` will decrease it.
If it becomes less then zero -- string is invalid.
If we found `*` the *minimum* value of possible balance decreases, and the *maximum* value increases.
String is valid, if *minimum* is zero at the end.

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function checkValidString(s: string): boolean {
    const n = s.length; let min = 0, max = 0;
    for ( let i = 0; i < n; i++ )
        if ( s[ i ] === '(' )
            min++, max++
        else if ( s[ i ] === ')' ) {
            if ( max === 0 ) return false;
            min = Math.max( 0, min - 1 ), max--;
        } else
            min = Math.max( 0, min - 1 ), max++;
    return min === 0;
};
```