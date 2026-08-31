# Dart Solution

**Author:** aleena122
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4580705/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4580705/)

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
    int lenLongestFibSubseq(List<int> arr) {
    int n = arr.length;
    if (n < 3) {
      return 0;
  }
  Set<int> numSet = Set<int>.from(arr);

    int maxLength = 0;
    for (int i = 0; i < n - 2; i++) {
      for (int j = i + 1; j < n - 1; j++) {
        int a = arr[i];
        int b = arr[j];
        int length = 2;
        while (numSet.contains(a + b)) {
          int temp = a;
          a = b;
          b = temp + b;
          length++;
        }
        maxLength = maxLength > length ? maxLength : length;
      }
    }

    return maxLength > 2 ? maxLength : 0;
  }
}
```