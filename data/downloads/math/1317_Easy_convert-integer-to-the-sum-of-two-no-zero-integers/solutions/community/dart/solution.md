# easy solution

**Author:** muhdsahaddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/6102494/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/6102494/)

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
 List<int> getNoZeroIntegers(int n) {
  List<int> list = [];
  List<String> temp = [];
  for (var i = 1; i < n; i++) {
    list.clear();
    list.addAll([i, n - i]);
    temp = list
        .map((number) =>
            number.toString().split('')) // Convert to string and split
        .expand((element) => element) // Flatten the list of lists
        .toList();
    if (n == list.reduce((value, element) => value + element) &&
        !temp.contains('0')) {
      return list;
    }
  }
  return [];
}
}
```