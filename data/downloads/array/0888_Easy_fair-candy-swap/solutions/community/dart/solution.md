# Easy Approach

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/6000220/](https://leetcode.com/problems/fair-candy-swap/solutions/6000220/)

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
  List<int> fairCandySwap(List<int> aliceSizes, List<int> bobSizes) {

  int lenA = aliceSizes.length;
  int lenB = bobSizes.length;
  int sumA = 0;
  int sumB = 0;
  int diff = 0;
  List<int> result = List<int>.filled(2, 0);

  for (int i = 0; i < lenA; i++) {
    sumA += aliceSizes[i];
  }

  for (int i = 0; i < lenB; i++) {
    sumB += bobSizes[i];
  }

  diff = (sumA - sumB) ~/ 2;

  for (int i = 0; i < lenA; i++) {
    for (int j = 0; j < lenB; j++) {
      if (aliceSizes[i] == bobSizes[j] + diff) {
        result[0] = aliceSizes[i];
        result[1] = bobSizes[j];
      }
    }
  }
  return result;
  }
}
```