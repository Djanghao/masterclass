# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4893695/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4893695/)

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
  int maximizeGreatness(List<int> nums) {
    nums.sort();
    var i = 0;
    var j = 0;
    var count = 0;
    while (j < nums.length) {
        if (nums[i] < nums[j]) {
            count++;
            i++;
        }

        j++;
    }

    return count;
  }
}
```