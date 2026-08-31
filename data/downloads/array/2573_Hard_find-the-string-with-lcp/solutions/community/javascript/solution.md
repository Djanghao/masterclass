# JS Solution - No Union Find, just edge cases checking

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/4203402/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/4203402/)

---

LOL getting accepted from this "edgy" problem right in the first try \uD83E\uDEE0

# Approach
## Part 1: Construct the string from a valid LCP
- Assuming the given LCP **is already valid**, the problem is surprisingly easy, as `word[i] == word[j] if and only if lcp[i][j] > 0` (`Cond#0`). Btw that's why they would ask you to validate it as well so this is worth hard difficulty LOL.
- To make `word` alphabetically smallest, we only have to prioritized the smallest unused character.
- Pseudo-code:
```
let chars = [undefined] * n;
let firstUnusedChar = "a";

for (i from 0 to n-1)
    if (res[i] == undefined)
        for (let j from i+1 to n-1)
            if (lcp[i][j] > 0) res[i] = firstUnusedChar
        firstUnusedChar = nextChar(firstUnusedChar)
```

## Part 2: Validating the LCP
IDK if I've overchecked any conditions but these are the ones that I came up with:
- **`Cond#1`**: `lcp[i][i] == n - i` for each `0 <= i < n`;
- **`Cond#2`**: `lcp[i][j] == lcp[j][i]` for each `0 <= i < n; 0 <= j < n`;
- **`Cond#3`**: `lcp[i][j] < n - max(i, j)` for each `0 <= i < n; 0 <= j < n`;
- **`Cond#4`**: either `lcp[i-1][j-1] == lcp[i][j] + 1` or `lcp[i-1][j-1] == 0` for each `0 < i < n; 0 < j < n`;
- **`Cond#5`**: if `lcp[i][j] > 0` and `lcp[j][k] > 0`, then `lcp[i][i] > 0` `0 <= i < n; 0 <= j < n; 0 <= k < n;`;
- **`Cond#6`**: The number of used character does not exceed `26`;

**`Cond#5`** is the only tricky condition as it looks like it would take $$O(n^3)$$ to check. However, we can take advantage of the `chars` array. If **`Cond#0`** holds true, **`Cond#05`** is just equivalent to `if char[i] == char[j] && char[j] == char[k]; then char[i] == char[k]`, which is obviously true. In other words, **`Cond#5`** is just a derived statement from **`Cond#0`**, which takes only $$O(n^2)$$ to check.
All of the condition checking are noted in the code below. They may look different as I apply different tricks to optimize the code, but it is the same core logic that I've shown.

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(n)$$

# Code
```js
/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  let n = lcp.length;

  for (let i = 0; i < n; i++) {
    let bound = n - i;
    // Cond#1
    if (lcp[i][i] != bound) return "";

    for (let j = 0; j < i; j++) {
      // Cond#2  
      if (lcp[i][j] != lcp[j][i]) return "";
      // Cond#3
      if (lcp[i][j] > bound) return "";
      // Cond#4
      if (lcp[i - 1][j - 1] && lcp[i][j] + 1 != lcp[i - 1][j - 1]) return "";
    }
  }

  let chars = Array(n).fill();
  let cc = 97;
  let ch = "a";

  for (let i = 0; i < n; i++) {
    if (chars[i]) {
      for (let j = 0; j < i; j++) {
        // Cond#0
        if ((chars[j] == chars[i]) ^ (lcp[i][j] > 0)) return "";
      }
      continue;
    }
    // Cond#6
    if (cc > 122) return "";

    // Cond#0
    for (let j = 0; j < i; j++) {
      if (lcp[i][j] > 0) return "";
    }

    ch = String.fromCharCode(cc++);
    chars[i] = ch;

    for (let j = i + 1; j < n; j++) {
      if (lcp[i][j] > 0) {
        // Cond#0
        if (chars[j]) return "";
        else chars[j] = ch;
      }
    }
  }

  return chars.join("");
};
```