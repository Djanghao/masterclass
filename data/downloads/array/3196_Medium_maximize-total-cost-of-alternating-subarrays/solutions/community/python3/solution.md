# Dynamic programming and space optimized. Beats  100%, easy to understand.

**Author:** null_pointer_exception
**Votes:** 47
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355138/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Kind of dynamic programming

# Approach

For each number we have 2 choices, add or subtract to previous result.
We will maintain 2 result states, **addResult** and **subResult**.

Now coming to current element, if we want to
- **Add**: We can add this to maximum of addResult and subResult, because previous result doesn't matter.
- **Subtract**: We need to add this to addResult, because adding it to subResult will make it more negative as well as it violates problem statement;

Once we are done with all element, return maximum of addResult and subResult
         
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Java
```
class Solution {
    public long maximumTotalCost(int[] nums) {
        int n = nums.length;
        long addResult = nums[0];
        long subResult = nums[0];
        for (int i = 1; i < n; i++) {
            long tempAdd = Math.max(addResult, subResult) + nums[i];
            long tempSub = addResult - nums[i];

            addResult = tempAdd;
            subResult = tempSub;
        }
        return Math.max(addResult, subResult);
    }
}
```

#Python
```
def maximumTotalCost(self, nums):
    add_result = nums[0]
    sub_result = nums[0]

    for i in range(1, len(nums)):
        temp_add = max(add_result, sub_result) + nums[i]
        temp_sub = add_result - nums[i]

        add_result = temp_add
        sub_result = temp_sub

    return max(add_result, sub_result)
```


