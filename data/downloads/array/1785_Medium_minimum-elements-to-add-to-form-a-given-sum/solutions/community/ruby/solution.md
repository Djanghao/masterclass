# Ruby O(k)

**Author:** tmpasipanodya
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/4802003/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/4802003/)

---

# Intuition
Not sure why this is labelled as a medium.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(k)

- Space complexity: O(k)

# Code
```
# @param {Integer[]} nums
# @param {Integer} limit
# @param {Integer} goal
# @return {Integer}
def min_elements(nums, limit, goal)
    sum = nums.sum
    difference = goal - sum

    return 0 if difference == 0

    return 1 if difference.abs <= limit

    (difference.abs / limit) +  [(difference.abs % limit), 1].min

end
```