# Official Solution

**Link:** [https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/solution/](https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/solution/)

---

### Approach: Duplicate Removal for Positive Numbers

#### Intuition

The problem essentially requires finding a non-empty subsequence of non-repeating elements that gives the maximum sum. To achieve this, we can greedily collect all positive numbers in a hash set to ensure uniqueness and then sum them. If there are no positive numbers, we return the maximum value from the array.

#### Implementation

<iframe src="https://leetcode.com/playground/6wVQkBZu/shared" frameBorder="0" width="100%" height="500" name="6wVQkBZu"></iframe>

#### Complexity analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.
  
  We traverse the array exactly once, and each operation on the hash table takes constant time in the average case.

- Space complexity: $O(n)$.
  
  This comes mainly from the space used by the hash table to store the positive numbers.