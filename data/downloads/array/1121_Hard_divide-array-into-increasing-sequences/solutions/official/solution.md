# Official Solution

**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solution/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solution/)

---

### Approach: Maximum Value

#### Intuition

The task is to split the array into one or more non-overlapping increasing subsequences, each of length at least `k`.

First, assume that the array is divided into `n` subsequences, with each subsequence having length `k`. According to the problem statement, each subsequence is strictly increasing, which means no subsequence contains duplicate numbers. Therefore, it is necessary to count the occurrences of each number and find `t`, the count of the most frequent number. These `t` numbers must be distributed among the `n` subsequences such that no two appear in the same subsequence, so we require `n >= t`.

Next, because no number appears more than `t` times, the other numbers can also be distributed into the `n` subsequences. If `n` is too large, some subsequences may have fewer than `k` elements, so `n` should be as small as possible. When `n = t`, the minimum number of subsequences is achieved. Since each subsequence must have length at least `k`, the total number of elements covered is `t * k`. This total must be less than or equal to the length of the entire array to satisfy the problem’s requirements.

When counting the number of occurrences of each element, one might naturally think of using a hash table, which is fast and convenient. However, this problem provides additional information: the array is a non-decreasing positive integer array. Therefore, a hash table is unnecessary. By taking advantage of the non-decreasing property, we can use a `pre` variable to record the previous value and keep track of its count. When `pre != nums[i]`, it indicates that the previous number has been fully counted and can be compared. Thus, we only need to traverse the array once without using extra space.

#### Implementation

<iframe src="https://leetcode.com/playground/B3TgGhqB/shared" frameBorder="0" width="100%" height="378" name="B3TgGhqB"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.
  
    We traverse the array once.

- Space complexity: $O(1)$.

---