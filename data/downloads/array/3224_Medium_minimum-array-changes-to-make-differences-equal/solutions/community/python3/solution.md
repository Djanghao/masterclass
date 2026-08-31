# ️‍🔥O(N + K) Range Addtion + Prefix Sum ️‍🔥Detailed Explanation ✅ python3

**Author:** Frederic-Chopin
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507065/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5507065/)

---

# Intuition
- Use prefix sum to perform range additions, achieving O(n) runtime.
# Code
```python3
class Solution:
    def minChanges(self, nums, k):
        n = len(nums)             
        change_count = [0] * (k + 2)  
        change_count[0] = n // 2

        for i in range(n // 2):
            left = nums[i]
            right = nums[n - i - 1]
            cur_diff = abs(left - right)
            max_diff = max(left, right, k - left, k - right)
            
            change_count[cur_diff] -= 1
            change_count[cur_diff + 1] += 1
            change_count[max_diff + 1] += 1

        cur_changes = 0
        min_changes = n // 2
        for i in range(k + 1):
            cur_changes += change_count[i]
            min_changes = min(min_changes, cur_changes)

        return min_changes
```
# Breakdown
#### Key Variables 
- `max_diff`: maximum possible difference obtainable changing just 1 number
    - We can change `left` or `right` to any value in the range `[0, k]`
        - change  `left` to `0`: `diff = right - 0 = right`
        - change `right` to `0`: `diff = left - 0 = left`
        - change `left` to `k`: `diff = k - right`
        - change `right` to `k`: `diff = k - left `
    - Thus, `max_diff = max(left, right, k - left, k - right)`
-  `change_count`: tracks the number of changes needed to achieve a difference `i` for all the pairs.
    - index `i`: difference, `change_count[i]`: range update effect for that difference
#### Why range update: 
- We could just make `change_count[i]` the total number of changes needed for all the pairs to have a difference `i`, but this would be inefficient. We would loop through every possible difference `[0, k]`, and loop through `nums` each time to calculate the changes needed. This would take $$O(n * k)$$ time. 
- Instead, we update the boundaries in `change_count` to perform range additions efficiently.
#### How it works
- The number of changes needed for difference `i` = `sum(change_count[: i + 1])`
- Example: `change_count` = `[1,2,-1,3]`.
    - diff $$0$$: changed needed $$ = 1$$
    - diff $$1$$: changes needed $$ = 1 + 2 = 3$$
    - diff $$2$$: changes needed $$ = 3 - 1 = 2$$
    - diff $$3$$: changes needed $$ = 2 + 3 = 5$$ 
#### Key Insight
- For every pair, it takes either 0, 1, or 2 changes to reach a certain difference `i` in the range `[0, k]`. 
    - 0 change: `i = cur_diff`
    - 1 change: `0 <= i <= max_diff, and i != cur_diff`
    - 2 changes: `i > max_diff`
#### How to Range update
- add 0 to `cur_diff`, add 1 to `[0, max_diff]`, add 2 to `> max_diff`.  
    - `change_count[0] = n // 2`: equilavent to having `change_count[0] += 1` in the for loop. Every pair can have a difference of 0 if we just make the pair equal, so we increase the count by 1 at index 0. This also marks the start of the range, and essentially adds 1 to all subsequent counts in `change_count`.
    - `change_count[cur_diff] -= 1`:  If a pair already has a difference `cur_diff`, no change is needed, so we decrement the count by 1, reflecting 0 change.
    - `change_count[cur_diff + 1] += 1`: we don't want the substration at previous index to affect to the following indexes, so we neutralize that change by adding 1. 
    - `change_count[max_diff + 1] += 1`: for all the differences greater than `max_diff`, we need to make 2 changes. We've already added 1 at index 0, so we just need to add 1 more to reflect the 2 changes. 
- `cur_changes` is the actual number of changes needed to achieve difference `i`. It acts as a prefix sum and accumulates the update effects. 
