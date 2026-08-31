# Dart solution

**Author:** aospiridonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5682206/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5682206/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String nearestPalindromic(String n) {
    int len = n.length;
    int i = len % 2 == 0 ? len ~/ 2 - 1 : len ~/ 2;
    int left = int.parse(n.substring(0, i + 1));
    final candidate = <int>[];
    candidate.add(getPalindrome(left, len % 2 == 0));
    candidate.add(getPalindrome(left + 1, len % 2 == 0));
    candidate.add(getPalindrome(left - 1, len % 2 == 0));
    candidate.add(pow(10, len - 1).toInt() - 1);
    candidate.add(pow(10, len).toInt() + 1);

    int diff = 0x7FFFFFFFFFFFFFFF, res = 0, nl = int.parse(n);
    for (final cand in candidate) {
      if (cand == nl) continue;
      final temp = (cand - nl).abs();
      if (temp < diff) {
        diff = temp;
        res = cand;
      } else if (temp == diff) {
        res = min(res, cand);
      }
    }

    return res.toString();
  }

  int getPalindrome(int left, bool even) {
    int res = left;
    if (!even) left = left ~/ 10;
    while (left > 0) {
      res = res * 10 + left % 10;
      left ~/= 10;
    }
    return res;
  }
}

```