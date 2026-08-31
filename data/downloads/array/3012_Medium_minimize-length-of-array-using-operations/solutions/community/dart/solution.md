# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4610947/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4610947/)

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
  int minimumArrayLength(List<int> nums) {
    final mini = nums.reduce(min);
    var c = 0;
    for (final num in nums) {
        if (num == mini) {
            c++;
        }
    }

    if (c == 1) {
        return 1;
    }

    for (final y in nums) {
        if (y % mini != 0) {
            return 1;
        }
    }

    return (c / 2).ceil();
  }
}
```