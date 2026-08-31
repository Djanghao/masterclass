# [2307. Check for Contradictions in Equations](https://leetcode.com/problems/check-for-contradictions-in-equations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 68 | 27 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`graph`](https://leetcode.com/tag/graph)

**Companies:** `amazon`, `uber`

## Description

You are given a 2D array of strings `equations` and an array of real numbers `values`, where `equations[i] = [A_i, B_i]` and `values[i]` means that `A_i / B_i = values[i]`.

Determine if there exists a contradiction in the equations. Return `true`* if there is a contradiction, or *`false`* otherwise*.

**Note**:

	- When checking if two numbers are equal, check that their **absolute difference** is less than `10^-5`.

	- The testcases are generated such that there are no cases targeting precision, i.e. using `double` is enough to solve the problem.

 

**Example 1:**

```

Input: equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;a&quot;,&quot;c&quot;]], values = [3,0.5,1.5]
Output: false
Explanation:
The given equations are: a / b = 3, b / c = 0.5, a / c = 1.5
There are no contradictions in the equations. One possible assignment to satisfy all equations is:
a = 3, b = 1 and c = 2.

```

**Example 2:**

```

Input: equations = [[&quot;le&quot;,&quot;et&quot;],[&quot;le&quot;,&quot;code&quot;],[&quot;code&quot;,&quot;et&quot;]], values = [2,5,0.5]
Output: true
Explanation:
The given equations are: le / et = 2, le / code = 5, code / et = 0.5
Based on the first two equations, we get code / et = 0.4.
Since the third equation is code / et = 0.5, we get a contradiction.

```

 

**Constraints:**

	- `1 <= equations.length <= 100`

	- `equations[i].length == 2`

	- `1 <= A_i.length, B_i.length <= 5`

	- `A_i`, `B_i` consist of lowercase English letters.

	- `equations.length == values.length`

	- `0.0 < values[i] <= 10.0`

	- `values[i]` has a maximum of 2 decimal places.

---

**Links:** [Submissions](https://leetcode.com/problems/check-for-contradictions-in-equations/) | [Solutions](https://leetcode.com/problems/check-for-contradictions-in-equations/)
