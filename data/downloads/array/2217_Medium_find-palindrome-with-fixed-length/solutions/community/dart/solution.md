# [Dart] Odd Even Approach

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/3221998/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/3221998/)

---

# Intuition
Pick the middle of intLength and calculate left and reverse it and append to the right.


# Code
```
class Solution {
  List<int> kthPalindrome(List<int> queries, int intLength) {
    int oddLen = intLength ~/ 2;
    int evenLen = (intLength ~/ 2) - 1;
    int len = intLength.isEven ? evenLen : oddLen;
    int start = pow(10, len).toInt();

    for (var i = 0; i < queries.length; i++) {
      var x = start + queries[i] - 1;
      var s = x.toString();
      if (intLength.isEven) {
        s += s.split('').reversed.join();
      } else {
        s += s.substring(0, len).split('').reversed.join();
      }
      if (s.length > intLength) {
        queries[i] = -1;
      } else {
        queries[i] = int.parse(s);
      }
    }

    return queries;
  }
}
```