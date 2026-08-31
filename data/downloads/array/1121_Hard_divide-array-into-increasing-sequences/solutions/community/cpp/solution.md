# Simple O(n) time, O(1) space

**Author:** mortonjack
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/3149796/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/3149796/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The input array is always increasing, unless there is a duplicate number. The maximum amount of times a number repeats is the minimum number of disjoint subsequences we will need such that each subsequence is increasing.

For example: `[1, 2, 2, 4, 4, 4]`
This array contains 3 fours, so we will need to split it into at least 3 subsequences, such as `{1, 2, 4}, {2, 4}, {4}`.

We can assume an even distribution of numbers across the subsequences, because so long as there are no duplicates, it will be increasing. Here, that would be `{1, 4}, {2, 4}, {2, 4}`.

# Approach
<!-- Describe your approach to solving the problem. -->
In one loop over the array, keep track of 3 variables: 
1. Highest amount of duplicate values `mostDupes`
2. Count of times we've seen the current value `count`
3. The previous value `prev`

Whenever the current value is identical to the previous, we increment `count`, and update the highest amount of duplicate values `mostDupes` if necessary. Otherwise, we reset `count`, and update the previous value `prev`.

After the loop, we return true if, after dividing `nums` into `mostDupes` subsequences, each subsequence contains at least `k` elements. When `nums.size/k` has a remainder, we can ignore it, since we only need to focus on the minimum length subsequence.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool canDivideIntoSubsequences(vector<int>& nums, int k) {
        int mostDupes = 1;
        int count = 0;
        int prev = 0;
        for (auto& num: nums) {
            if (num == prev) {
                count++;
                mostDupes = max(mostDupes, count);
            } else {
                prev = num;
                count = 1;
            }
        }
        return nums.size()/mostDupes >= k;
    }
};
```