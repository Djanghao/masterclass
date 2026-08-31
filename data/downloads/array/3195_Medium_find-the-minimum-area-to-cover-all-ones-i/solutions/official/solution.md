# Official Solution

**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solution/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solution/)

---

### Approach: One-time Traversal

#### Intuition

During traversal, we need to find the upper, lower, left, and right boundaries where $1$ appears. Once the boundaries are identified, we calculate the minimum area they enclose.

#### Implementation

<iframe src="https://leetcode.com/playground/kSgEeDrC/shared" frameBorder="0" width="100%" height="463" name="kSgEeDrC"></iframe>

#### Complexity Analysis

Let $n$ be the number of rows in the $\textit{grid}$, and $m$ be the number of columns in $\textit{grid}[0]$.

- Time complexity: $O(n \cdot m)$.
  
  We traverse the entire matrix once.

- Space complexity: $O(1)$.
  
  Only a few additional variables are needed.
  
---