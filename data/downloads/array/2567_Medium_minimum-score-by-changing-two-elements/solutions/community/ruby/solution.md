# Simple Ruby Solution

**Author:** rosssg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203138/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203138/)

---

# Intuition
The answer would seem to be, (1) change the two highest values to one of the remaining ones; (2) change the two lowest values to one of the remaining ones; or (3) change the highest & lowest values to one of the remaining ones.

# Approach
So, sort the array, and then take the minimum of those three cases (i.e., third highest - lowest, second highest - second lowest, highest - third lowest).

# Complexity
- Time complexity:
All of the time complexity comes from Ruby's sort, which is presumably O(n log(n))

- Space complexity:
Space complexity is O(n)? No new space, it's just what is allocated for the nums array and anything required for its sorting.

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimize_sum(nums)
    return 0 if nums.length < 4
    nums.sort!
    return [nums[-1]-nums[2], nums[-2]-nums[1], nums[-3]-nums[0]].min
end
```