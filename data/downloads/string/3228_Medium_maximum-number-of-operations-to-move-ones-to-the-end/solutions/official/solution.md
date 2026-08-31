# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solution/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solution/)

---

### Approach: Greedy + Counting

#### Intuition

The problem asks us to calculate the maximum number of operations required to move all $1$s to the end of the string. We can start by selecting a $1$ whose next character is $0$, then move this $1$ to the right until it is blocked by another $1$ or reaches the end of the string.

Each $1$ maintains its relative position, so its final position in the string is determined. The more times a $1$ gets blocked during movement, the greater its contribution to the total number of operations.

If we perform the operations on each $1$ from right to left, each $1$ would need at most one operation to reach its final position, meaning no $1$ would be blocked. Therefore, to maximize the number of operations, we should perform them greedily from left to right, allowing each $1$ to be blocked more often and thus increasing the total count.

The algorithm logic is as follows:

- Traverse the string $s$ from left to right. For each segment of consecutive $0$s, add the count of $1$s that appear before the first $0$ in this segment to the answer, since all those previous $1$s contribute one operation each.

- If the current character is $1$, increment the counter `countOne` by 1, indicating that there is one more $1$ that can potentially be blocked later.

- After completing the traversal, return the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/MHd2K6go/shared" frameBorder="0" width="100%" height="429" name="MHd2K6go"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.
  
  We traverse the string once.

- Space complexity: $O(1)$.
  
  Only a few additional variables are used.

---