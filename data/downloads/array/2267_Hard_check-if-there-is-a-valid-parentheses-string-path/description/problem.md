# [2267.  Check if There Is a Valid Parentheses String Path](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 538 | 9 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `google`

## Description

A parentheses string is a **non-empty** string consisting only of `'('` and `')'`. It is **valid** if **any** of the following conditions is **true**:

	- It is `()`.

	- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid parentheses strings.

	- It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A **valid parentheses string path** in the grid is a path satisfying **all** of the following conditions:

	- The path starts from the upper left cell `(0, 0)`.

	- The path ends at the bottom-right cell `(m - 1, n - 1)`.

	- The path only ever moves **down** or **right**.

	- The resulting parentheses string formed by the path is **valid**.

Return `true` *if there exists a **valid parentheses string path** in the grid.* Otherwise, return `false`.

 

**Example 1:**

![image](./images/0.png)
```

Input: grid = [[&quot;(&quot;,&quot;(&quot;,&quot;(&quot;],[&quot;)&quot;,&quot;(&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;,&quot;)&quot;]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string &quot;()(())&quot;.
The second path shown results in the valid parentheses string &quot;((()))&quot;.
Note that there may be other valid parentheses string paths.

```

**Example 2:**

![image](./images/1.png)
```

Input: grid = [[&quot;)&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;]]
Output: false
Explanation: The two possible paths form the parentheses strings &quot;))(&quot; and &quot;)((&quot;. Since neither of them are valid parentheses strings, we return false.

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 100`

	- `grid[i][j]` is either `'('` or `')'`.

---

**Links:** [Submissions](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/) | [Solutions](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/)
