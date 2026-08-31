# Python3. Clean code. Sliding window. Nothing fancy

**Author:** datnguyen03
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4886166/](https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4886166/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Suppose stand index is `x`
If we use step 1 -> we need 2 moves to take 1 point
If we use step 2 -> we nedd `|y - x|` moves to take 1 point (`y` is one index)

So step 1 will be optimal if `[y - x] > 2`.
But we just can do the step 1 in `max_changes` times
So we do step 2 in `k - max_changes`, but if `|y - x| <= 1`, step 2 will be optimal
So we consider do the step 2 from `k - max_changes` to `k - max_changes + 2` times because we just have 3 `y` satisfy `|y - x| <= 1`
So we can see the problem right now will be count minimum moves to take `z` points if only using step 2
-> using sliding window

For example we have array `[1, 5, 6, 9, 10, 15]`
We need to chose one index is stand index and total distanse from this index to other index is minimum
-> Chose the middle index (in this example is 9), so total distance is minimum
To caculate the total distanse in `O(1)`, we use prefix sum
In this example `total_distance = sum(10, 15) - 9 * 2 + 9 * 3 - sum(1, 5, 6)`

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
    def minimumMoves(self, nums: List[int], k: int, max_changes: int) -> int:
        one_indexes = [index for index in range(len(nums)) if nums[index] == 1]
        min_moves = float('inf')
        if max_changes >= k: # with 0 step 2
            min_moves = 2 * k

        prefix_sums = one_indexes.copy()
        for i in range(1, len(one_indexes)):
            prefix_sums[i] += prefix_sums[i - 1]

        def get_sum(left, right):
            if left > right:
                return 0
            if left == 0:
                return prefix_sums[right]
            return prefix_sums[right] - prefix_sums[left - 1]

        min_step_twos = max(1, k - max_changes)
        # step_twos is the number of times using step 2
        for step_twos in range(min_step_twos, min_step_twos + 3):
            if step_twos > k:
                break

            for left in range(len(one_indexes)):
                right = left + step_twos - 1
                if right >= len(one_indexes):
                    break

                stand_index = (right + left) // 2
                # number moves that using step 1
                curr_moves = (k - step_twos) * 2
                # total distance from mid to right
                curr_moves += get_sum(stand_index + 1, right) - (right - stand_index) * one_indexes[stand_index]
                # total distance from left to mid
                curr_moves += (stand_index - left) * one_indexes[stand_index] - get_sum(left, stand_index - 1)

                min_moves = min(min_moves, curr_moves)

        return min_moves

```