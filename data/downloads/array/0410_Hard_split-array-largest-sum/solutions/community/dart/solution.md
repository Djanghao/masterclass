# Binary search

**Author:** abdulajees285786
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/4336512/](https://leetcode.com/problems/split-array-largest-sum/solutions/4336512/)

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
  

  int splitArray(List<int> arr, int m) {
  int start = 0;
  int end = 0;

  for (int i = 0; i < arr.length; i++) {
    start = start < arr[i] ? arr[i] : start;
    end += arr[i];
  }

  while (start < end) {
    int mid = start + (end - start) ~/ 2;
   
    int piece = 1;
    int sum = 0;

    for (int value in arr) {
      if (sum + value > mid) {
        piece++;
        sum = 0;
      }
      sum += value;
    }

    if (piece <= m) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
}
```