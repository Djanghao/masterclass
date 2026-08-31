# Memory 30.86 MB 🚀 Runtime 364 ms 🚀 Beats 100.00% 🚀 of users with PHP

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/4864048/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/4864048/)

---

# Intuition
The problem asks us to find the maximum number of increasing groups that can be formed from a given array of usage limits. An increasing group is defined as a group of consecutive usage limits where each limit is greater than the previous one. To solve this problem, we can sort the usage limits in ascending order and iterate through the sorted array. If the current usage limit is greater than the number of groups formed so far, we increment the number of groups and subtract the number of groups from the current usage limit. We then add the remaining usage limit to the next element in the array. Finally, we return the number of groups formed.

# Approach
1. Sort the usage limits in ascending order.
2. Initialize a variable `k` to keep track of the number of groups formed.
3. Iterate through the sorted array of usage limits.
   - If the current usage limit is greater than `k`, increment `k` by 1 and subtract `k` from the current usage limit.
   - If there are more elements in the array, add the remaining usage limit to the next element.
4. Return the value of `k`, which represents the maximum number of increasing groups.

# Complexity
- Time complexity: O(n log n), where n is the number of usage limits. This is because we have to sort the usage limits before applying the algorithm.
- Space complexity: O(1), as we are using a constant amount of extra space.

# Code
```
class Solution {
    function maxIncreasingGroups($usageLimits) {
        sort($usageLimits);
        $k = 0;
        $n = count($usageLimits);

        for ($i = 0; $i < $n; $i++) {
            if ($usageLimits[$i] > $k) {
                $k++;
                $usageLimits[$i] -= $k;
            }
            if ($i + 1 < $n) {
                $usageLimits[$i + 1] += $usageLimits[$i];
            }
        }

        return $k;
    }
}
```