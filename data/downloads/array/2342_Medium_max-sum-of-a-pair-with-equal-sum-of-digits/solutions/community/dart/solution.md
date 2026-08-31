# Simple solution on Dart | O(n)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5809500/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5809500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int maximumSum(List<int> nums) {
    int result = -1;
    Map<int, List<int>> sumNum = {};

    for (int digit in nums) {
        int digitSum = 0;
        int number = digit;

        while (number > 0) {
            digitSum += number % 10;
            number ~/= 10;
        }

        sumNum.update(
            digitSum,
            (value) => sumNum[digitSum]!..add(digit),
            ifAbsent: () => [digit],
        );
    }

    sumNum.forEach((key, value) {
        if (value.length > 1) {
            value.sort((a, b) => b.compareTo(a));
            result = max(result, (value[0] + value[1]));
        }
    });

    return result;
  }
}
```