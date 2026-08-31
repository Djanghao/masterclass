# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5253852/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5253852/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> divideArray(List<int> nums, int k) {
    final List<List<int>> res = [];
    nums.sort();
    for (int i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 1] <= k && nums[i] - nums[i - 2] <= k && nums[i - 1] - nums[i - 2] <= k) {
            res.add([nums[i - 1], nums[i - 2], nums[i]]);
        } else {
            return [];
        }
    }

    return res;
  }
}
```