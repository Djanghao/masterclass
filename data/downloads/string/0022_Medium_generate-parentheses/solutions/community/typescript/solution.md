# TypeScript / JavaScript - recursive approach to generate valid parens

**Author:** joemillervi
**Votes:** 6
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/3375419/](https://leetcode.com/problems/generate-parentheses/solutions/3375419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first i generated all combinations of parens and then filtered them down based on if it was valid

# Approach
<!-- Describe your approach to solving the problem. -->
Better (this) approach is to add an open or closed paren if either one is a valid option. 

If there are any open parens left to add, you can always add an open paren. 

if there are more open parens then closed ones, you can add a closed paren.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O (n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function generateParenthesis(n: number): string[] {
    /*
        create all possible valid combinations
        at each 
    */
    const allCombos = []

    function recurse(
        openParens: number, closedParens: number, combo: string
    ) {
        if (openParens === 0 && closedParens === 0) {
            allCombos.push(combo)
            return
        }
        
        // if there are open parens to close
        if (openParens < closedParens) {
            recurse(openParens, closedParens - 1, combo + ')')
        }

        // if there are open parens left to use
        if (openParens > 0) {
            recurse(openParens - 1, closedParens, combo + '(')
        }
    }

    recurse(n, n, '')

    return allCombos
}
```