# Dart solution

**Author:** ali62
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4668256/](https://leetcode.com/problems/sequential-digits/solutions/4668256/)

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
  List<int> sequentialDigits(int low, int high) {
    String numbers = "123456789";
    List<int> output = [];
    int sublistFrom = low.toString().length;
    for (int i = 0; i < numbers.length; i++) {
      for (int j = 0; j < numbers.length; j++) {
        if (j <= numbers.length - sublistFrom) {
          int digits = int.parse(numbers.substring(j, j + sublistFrom));
          if (digits >= low && digits <= high) {
            output.add(digits);
          }
        }
      }
      sublistFrom++;
    }
    return output;
  }
}
```