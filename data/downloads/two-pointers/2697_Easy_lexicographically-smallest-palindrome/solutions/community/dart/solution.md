# In Place Two pointers Dart Solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5744484/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5744484/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String makeSmallestPalindrome(String s) {
    int start = 0;
    int end = s.length - 1;
    while (start <= end) {
      if (s[start] != s[end]) {
        s = s.codeUnitAt(start) > s.codeUnitAt(end)
            ? s.replaceRange(start, start + 1, s[end])
            : s.replaceRange(end, end + 1, s[start]);
      }
      start++;
      end--;
    }
    return s;
  }
}

```