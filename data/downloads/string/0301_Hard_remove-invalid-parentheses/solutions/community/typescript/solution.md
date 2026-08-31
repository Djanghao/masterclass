# Depth-First Search Backtracking - Simple w/ comments + Explanation (Typescript)

**Author:** jbernier
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/5078208/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/5078208/)

---

# Intuition

We're basically going to try out every plausible combination of the input string, aborting a combination if it is obviously invalid (more `)` than `(`) or if we've removed more parenthesis than the minimum # of parenthesis removals we want to allow.

First we'll calculate the minimum number of parenthesis removals necessary to turn the input string into a valid string (`minParenRemovals = getMinParenRemovals()`). This is straightforward and separate from the depth-first search (see https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ for a similar problem)

Next we'll try out every plausible combination of the input string using depth-first search. While we're building each string combination, we'll ensure that the following constraints are satisfied:

1. The string does not have more closing parenthesis `)` than   open parenthesis `(`. If there are more closing parenthesis than opening parenthesis, the string is obviously invalid and should be disregarded.
2. We have not removed more paranthesis than the minimum # of parenthesis removals (`minParenRemovals`)

If a string we're building fails any of those constraints, then we'll pre-emptively abort that string combination.

Once we've built a string removing a maximum of `minParenRemovals` removals (`i === s.length`), if the parenthesis are perfectly balanced (`openParens === 0`), then we've successfully created a valid string and can add the string to our final result.

# Approach

1. Find minimum number of parenthesis removals (`getMinParenRemovals()`)
2. Depth first search to try out every valid input string combination

For every character, there are three cases:

1. If character is not a `(` or `)`, then just add it
2. If character is a `(`, then try keeping the `(` or skipping it if the # of pararenthesis removed hasn't exceeded our maximum (`minParenRemovals`)
3. If character is a `)`, then if there is a corresponding open parenthesis `openParens > 0`, then include it. If we haven't exceeded our parenthesis removal quota, then also try skipping it.

Upone finishing traversing the input string (`i === s.length`) and building our string, add the string to the final result set if the parenthesis are perfectly balanced (`openParens === 0`)

# Complexity

`N = # of characters in input string`

- Time complexity: $$O(2^N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$

# Code
```
function removeInvalidParentheses(s: string): string[] {
  // Find minimum # of parenthesis removals
  const getMinParenRemovals = () => {
    let minRemovals = 0;
    let open = 0;
    for (const ch of s) {
      if (ch === '(') open++;
      else if (ch === ')') {
        if (open > 0) open--;
        else minRemovals++;
      }
    }
    minRemovals += open;
    return minRemovals;
  };

  const ans = new Set<string>();

  const dfs = (
    i: number, // index within input string
    current: string, // current string we're building
    openParens: number, // current net # of open parenthesis (if 0, then '(' and ')' are balanced)
    removalsRemaining: number // parenthesis removals remaining. Won't allow this to go negative
  ) => {
    if (removalsRemaining < 0 || openParens < 0) return;
    if (i >= s.length) {
      // We've reached end of string
      if (openParens === 0) {
        // Parenthesis must be perfectly balanced to include
        ans.add(current);
      }
      return;
    }

    if (s[i] === '(') {
      // include '(' and see what strings we can build
      dfs(i + 1, current + s[i], openParens + 1, removalsRemaining);
      // if removals remaining, see what happens when we remove this parenthesis
      if (removalsRemaining > 0) {
        dfs(i + 1, current, openParens, removalsRemaining - 1);
      }
    } else if (s[i] === ')') {
      // If there is an open parenthesis to match with, then we'll include this closing parenthesis
      if (openParens > 0) {
        dfs(i + 1, current + s[i], openParens - 1, removalsRemaining);
      }
      // if parenthesis removals remaining, let's try removing this closing parenthesis
      if (removalsRemaining > 0) {
        dfs(i + 1, current, openParens, removalsRemaining - 1);
      }
    } else {
      // Regular character, just include it
      dfs(i + 1, current + s[i], openParens, removalsRemaining);
    }
  };

  dfs(0, '', 0, getMinParenRemovals());

  return Array.from(ans);
}


```