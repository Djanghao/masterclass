# Easy dart solution

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/6000286/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/6000286/)

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
```dart []
class Solution {
List<int> sortArrayByParityII(List<int> nums) {
  List<int> even = [], odd = [], result = [];
  Map<int, int> map = {};

  for (int element in nums) {
    if (element.isEven) {
      even.add(element);
    } else {
      odd.add(element);
    }
  }

  for (int i = 0; i < nums.length; i++) {
    if (i.isEven) {
      map.addAll({i: even.removeLast()});
    } else {
      map.addAll({i: odd.removeLast()});
    }
  }

  for (int i = 0; i < nums.length; i++) {
    result.add(map[i]!);
  }

  return result;
}
}
```