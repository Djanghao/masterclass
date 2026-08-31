# Super simple solution using combinatorics

**Author:** Mudit-B
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5619512/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/solutions/5619512/)

---

# Key Insights

The problem can be viewed as a way of distributing the values in nums between two arrays while maintaining their monotonic properties.
The minimum possible value for arr2 at any position constrains the possible distributions.
Once we find the minimum possible value for arr2, the problem transforms into a combinatorial question.

# Approach

First, we iterate through nums to find the minimum possible value for arr2 (min_arr2).

We maintain two variables, a and b, representing the current values in arr1 and arr2 respectively.
We update these values ensuring arr1 is non-decreasing and arr2 is non-increasing.

If min_arr2 is negative, it's impossible to create valid monotonic pairs, so we return 0.
If min_arr2 is non-negative, we can view this as a stars and bars problem:

We need to distribute min_arr2 "stars" into len(nums) + 1 "bars" (including the space before the first element and after the last).
This is equivalent to choosing len(nums) positions out of (min_arr2 + len(nums)) total positions.


We use the combination formula to calculate this: C(min_arr2 + len(nums), len(nums)).
Finally, we return the result modulo $10^9 + 7$ as required by the problem.

Time and Space Complexity

Time Complexity: O(n), where n is the length of nums. We iterate through nums once.
Space Complexity: O(1), as we only use a constant amount of extra space.

# Code
```py
from math import comb
class Solution:
    def countOfPairs(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        a, b = 0, nums[0]
        arr1 = [a]
        arr2 = [b]
        for i in nums[1:]:
            # min a possible
            a = max(a, i - b)
            b = i - a
            arr1.append(a)
            arr2.append(b)
        # probablity question
        # bars and stars
        # we have to convert 5, 5, 5, 5 to 0, 0, 0, 0 in the end
        # xi can be {0, 1, 2, 3, 4, 5}
        # to find the number of times xi appears is the problem
        # x0 + x1 + x2 + x3 + x4 + x5 = 4
        
        # number of bars = 5
        # number of stars = 4
        # 9 choose 4 
        arr_2_min = min(arr2)
        if arr_2_min < 0:
            return 0
        res = comb(arr_2_min + len(arr2), len(arr2))
        
        return res % MOD
```