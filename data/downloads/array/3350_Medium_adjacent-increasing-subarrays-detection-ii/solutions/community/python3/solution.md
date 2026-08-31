# [Python3/C++/Java] Dynamic Programming - Detailed Explanation

**Author:** dolong2110
**Votes:** 13
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6030120/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6030120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Similar to this: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6030146/python3-c-java-dynamic-programming-detailed-solution/

# Approach
<!-- Describe your approach to solving the problem. -->
**1. Initialization:**
- `prev_increase, cur_increase = 0, 1`: Two variables are initialized.
    - `prev_increase` stores the length of the previous increasing subarray. It starts at `0`.
    - `cur_increase` stores the length of the current increasing subarray. It starts at `1` because any single number itself forms an increasing subarray of length `1`.
- `res = 0`: `res` will store the final result (the maximum number of subarrays). It's initialized to `0`.

**2. Iterating through the List:**

- `for i in range(1, len(nums))`: This loop iterates through the `nums` list, starting from the second element (index 1) up to the end of the list. This is because we're comparing each number to its preceding number.

**3. Checking for Increasing Subarrays:**

- `if nums[i] > nums[i - 1]: cur_increase += 1`: Inside the loop, this condition checks if the current number `nums[i]` is greater than the previous number `nums[i - 1]`. If it is, it means we're continuing an increasing subarray, so `cur_increase` is incremented by `1`.
- `else: prev_increase, cur_increase = cur_increase, 1`: If the current number is not greater than the previous one, the increasing subarray ends.
    - `prev_increase` is updated to the value of `cur_increase` (the length of the just-ended subarray).
    - `cur_increase` is reset to `1`, as we start a new potential increasing subarray with the current number.

**4. Calculating the Maximum Subarrays:**

- `res = max(res, cur_increase // 2, min(prev_increase, cur_increase))`: This is the core logic for calculating the maximum number of increasing subarrays. In each iteration, `res` is updated to the maximum of three values:
    - `res`: The current maximum.
    - `cur_increase // 2`: Since the current subarray is increasing, the 2 subarrays that can be formed from diving the current increasing subarray are also increasing. We divide by `2` because we need at least two strictly increasing subarray of same length. To make two subarray insidde current increasing subarry with equal length, we use `//` for integer division, which always make sure we have 2 sub array of equal length insdie current subarray.
    - `min(prev_increase, cur_increase)`: This handles the case where we can combine the previous and current increasing subarrays to form more subarrays. We take the minimum of the two lengths because we can only form as many subarrays as the shorter of the two allows.

**5. Returning the Result:**

- `return res`: After the loop finishes, the function returns the final res value, which represents the maximum number of increasing subarrays found.

**Example:**

Let's say `nums = [1, 3, 2, 4, 5]`. Here's how the code would work:

1. `i = 1: 3 > 1, cur_increase = 2`
2. `i = 2: 2 < 3, prev_increase = 2, cur_increase = 1, res = 1 (from min(2, 1))`
3. `i = 3: 4 > 2, cur_increase = 2`
4. `i = 4: 5 > 4, cur_increase = 3, res = 1 (from min(2, 3))`
Finally, res would be updated to `max(1, 3 // 2, min(2, 3)) = 2`, which is the correct answer.

This function efficiently finds the maximum number of increasing subarrays by keeping track of the lengths of the current and previous increasing subarrays and cleverly calculating the maximum possible subarrays at each step.

# Complexity
- Time complexity: $$O(N)$$ with `N` is length of `nums`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxIncreasingSubarrays(self, nums: List[int]) -> int:
        prev_increase, cur_increase = 0,1
        res = 0
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]: cur_increase += 1
            else: prev_increase, cur_increase = cur_increase, 1
            res = max(res, cur_increase // 2, min(prev_increase, cur_increase))
        return res
```
```C++ []
class Solution {
public:
    int maxIncreasingSubarrays(vector<int>& nums) {
        int prev_increase = 0, cur_increase = 1;
        int res = 0;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > nums[i - 1]) {
                cur_increase += 1;
            } else {
                prev_increase = cur_increase;
                cur_increase = 1;
            }
            res = max(res, max(cur_increase / 2, min(prev_increase, cur_increase))); 
        }
        return res;
    }
};
```
```java []
class Solution {
    public int maxIncreasingSubarrays(List<Integer> nums) {
        int prevIncrease = 0, curIncrease = 1;
        int res = 0;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums.get(i) > nums.get(i - 1)) {
                curIncrease += 1;
            } else {
                prevIncrease = curIncrease;
                curIncrease = 1;
            }
            res = Math.max(res, Math.max(curIncrease / 2, Math.min(prevIncrease, curIncrease)));
        }
        return res;
    }
}
```