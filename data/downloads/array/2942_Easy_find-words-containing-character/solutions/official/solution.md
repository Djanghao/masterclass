# Official Solution

**Link:** [https://leetcode.com/problems/find-words-containing-character/solution/](https://leetcode.com/problems/find-words-containing-character/solution/)

---

[TOC]

## Solution

--- 

### Approach: Simulation

#### Intuition

According to the problem, we should simulate the process by traversing each string and checking whether it contains the character $x$. If it does, we add the index of the string to the result array.

Finally, we return the result array.

#### Implementation

<iframe src="https://leetcode.com/playground/kJ7tkM3d/shared" frameBorder="0" width="100%" height="276" name="kJ7tkM3d"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array and $m$ be the length of the string.

- Time complexity: $O(n * m)$.
  
  We traverse each string to check if it contains the character `x`.

- Space complexity: $O(1)$.
  
  The space required for the return variable is not included in the calculation.