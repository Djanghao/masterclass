# Official Solution

**Link:** [https://leetcode.com/problems/type-of-triangle/solution/](https://leetcode.com/problems/type-of-triangle/solution/)

---

[TOC]

## Solution

--- 

### Approach: Mathematics

#### Intuition

First, sort $\textit{nums}$ in ascending order, then make the following checks in sequence:

- If $\textit{nums}[0] + \textit{nums}[1] \le \textit{nums}[2]$, return `"none"`.

- If $\textit{nums}[0] = \textit{nums}[2]$, return `"equilateral"`.

- If $\textit{nums}[0] = \textit{nums}[1]$ or $\textit{nums}[1] = \textit{nums}[2]$, return `"isosceles"`.

- If none of the above conditions are met, return `"scalene"`.

#### Implementation

<iframe src="https://leetcode.com/playground/o35iMU5B/shared" frameBorder="0" width="100%" height="310" name="o35iMU5B"></iframe>

#### Complexity Analysis

- Time complexity: $O(1)$.

  Since the length of $nums$ is only 3, the time required for sorting can be ignored.

- Space complexity: $O(1)$.
  
  No additional variables are needed.