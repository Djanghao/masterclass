# 100% Beats Dart Solution

**Author:** uchqun_shodmonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4360072/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4360072/)

---


# Code
```
class Solution {
  String largestGoodInteger(String num) {
  String ans = "";
  for (int i = 2; i < num.length; i++) {
    if (num[i] == num[i - 1] && num[i - 1] == num[i - 2]) {
      if (num.substring(i - 2, i + 1).compareTo(ans) > 0) {
        ans = num.substring(i - 2, i + 1);
      }
    }
  }

  return ans;
}
}
```