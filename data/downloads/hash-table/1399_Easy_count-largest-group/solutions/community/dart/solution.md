# the fastest

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/3883896/](https://leetcode.com/problems/count-largest-group/solutions/3883896/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n * log(n))
- Space complexity:
O(n)
# Code
```
class Solution {
  int digitSum(int num) {
    int sum = 0;
    while (num > 0) {
      sum += num % 10;
      num ~/= 10;
    }
    return sum;
  }

  int countLargestGroup(int n) {
    final groupCount = Map<int, int>(); // Map to store group sizes

    for (int i = 1; i <= n; i++) {
      int sum = digitSum(i);
      groupCount[sum] = (groupCount[sum] ?? 0) + 1;
    }

    int largestGroupSize = 0;
    int largestGroupCount = 0;

    groupCount.forEach((size, count) {
      if (count > largestGroupCount) {
        largestGroupCount = count;
        largestGroupSize = 1;
      } else if (count == largestGroupCount) {
        largestGroupSize++;
      }
    });

    return largestGroupSize;
  }
}



```