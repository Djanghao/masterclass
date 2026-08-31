# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4448273/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4448273/)

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
  List<int> findDiagonalOrder(List<List<int>> nums) {
    Map<int, List<int>> m = {};
    final List<int> res = [];
    for (int i = 0; i < nums.length; i++) {
        for (int j = 0; j < nums[i].length; j++) {
            if (!m.containsKey(i + j)) {
                m[i+j] = List.from([nums[i][j]]);
            } else {
                m[i+j]!.insert(0, nums[i][j]);
            }
        }
    }

    m.values.toList().forEach((e) => res.addAll(e));
    return res;
  }
}
```