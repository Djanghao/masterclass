# ⚡ 2DP Solution and Explanation: Finding Maximum Sequence Value of Array

**Author:** subhanjan-das
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786662/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786662/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem can approached using dynamic programming (DP). The key  is to break down the problem into smaller subproblems where we calculate the possible OR values of subsets up to a certain size for both the beginning and ending segments of the array. Just like in electrical courses!

# Approach
<!-- Describe your approach to solving the problem. -->
Using two dynamic programming tables (`dp1` and `dp2`) :
 - `dp1[i][j]` represents the set of possible OR values using exactly `j` elements from the subarray `nums[0..i-1]` 
 - `dp2[i][j]` represents the set of possible OR values using exactly `j` elements from the subarray `nums[i..n-1]`.

1. **Initialization**:
   - `dp1[0][0]` is initialized with `{0}` because OR of zero elements is 0.
   - Similarly, `dp2[n][0]` is initialized to `{0}`.

2. **Filling `dp1`**:
   - Iterate over each element `num` in `nums` from left to right.
   - For each count `cnt` from 0 to `k-1`, update `dp1[i][cnt+1]` by taking OR with the current number `num` for all values in `dp1[i][cnt]`.

3. **Filling `dp2`**:
   - Iterate over each element `num` in `nums` from right to left.
   - For each count `cnt` from 0 to `k-1`, update `dp2[i][cnt+1]` by taking OR with the current number `num` for all values in `dp2[i+1][cnt]`.

4. **Combining Results**:
   - For each split position `i`, consider the maximum XOR of all combinations of values from `dp1[i][k]` and `dp2[i][k]`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is $$O(n \\cdot k \\cdot 2^k)$$, where `n` is the length of the input array and `k` is the maximum number of elements to consider. This comes from the fact that in the worst case, for each element and for each possible subset size up to `k`, we might be dealing with up to `2^k` possible OR results due to combinatorial effects.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also $$O(n \\cdot 2^k)$$ due to storing OR results for up to `k` elements across `n` positions in both `dp1` and `dp2`.

# Code
```python3 []
class Solution:
    def maxValue(self, nums: List[int], k: int) -> int:
        n = len(nums)
        # dp1[i][j] = set of OR values using j elements from nums[0..i]
        dp1 = [dict() for _ in range(n + 1)]
        dp1[0][0] = {0}
        for i in range(n):
            dp1[i + 1] = {key: set(val) for key, val in dp1[i].items()}
            num = nums[i]
            for cnt in range(k):
                if cnt in dp1[i] and cnt + 1 <= k:
                    for val in dp1[i][cnt]:
                        new_or = val | num
                        dp1[i + 1].setdefault(cnt + 1, set()).add(new_or)
        # dp2[i][j] = set of OR values using j elements from nums[i..n]
        dp2 = [dict() for _ in range(n + 1)]
        dp2[n][0] = {0}
        for i in range(n - 1, -1, -1):
            dp2[i] = {key: set(val) for key, val in dp2[i + 1].items()}
            num = nums[i]
            for cnt in range(k):
                if cnt in dp2[i + 1] and cnt + 1 <= k:
                    for val in dp2[i + 1][cnt]:
                        new_or = val | num
                        dp2[i].setdefault(cnt + 1, set()).add(new_or)
        max_value = 0
        #combine dp1, dp2 at each split position
        for i in range(n + 1):
            if k in dp1[i] and k in dp2[i]:
                for val1 in dp1[i][k]:
                    for val2 in dp2[i][k]:
                        max_value = max(max_value, val1 ^ val2)
        return max_value

```