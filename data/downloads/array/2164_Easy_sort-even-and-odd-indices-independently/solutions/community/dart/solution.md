# Be simple

**Author:** max77445
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4456133/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4456133/)

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
  List<int> sortEvenOdd(List<int> nums) {
    final result = <int>[];
    final evenList = <int>[];
    final oddList = <int>[];
    for (var i = 0; i < nums.length; i++) {
      final value = nums[i];
      i.isEven ? evenList.add(value) : oddList.add(value);
    }

    evenList.sort();
    oddList.sort((a, b) => b.compareTo(a));

    for (var i = 0; i < nums.length; i++) {
      i.isOdd
          ? result.add(oddList.removeAt(0))
          : result.add(evenList.removeAt(0));
    }
    return result;
  }
}
```