# Easy Method

**Author:** Shaheed_Palappetty
**Votes:** 1
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/4202153/](https://leetcode.com/problems/pascals-triangle-ii/solutions/4202153/)

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
  List<int> getRow(int rowIndex) {
    List<int> result = [];
    int value = 1;

    for (int i = 0; i <= rowIndex; i++) {
      result.add(value);
      value = (value * (rowIndex - i)) ~/ (i + 1);
    }

    return result;
  }
}
```