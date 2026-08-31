# [Dart] O(N) Mapping to Kadane's Algorithm

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3369754/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3369754/)

---

# Code
```
import 'dart:collection';

class Solution {
  int maximumCostSubstring(String s, String chars, List<int> vals) {
    HashMap<String, int> map = HashMap();
    for (var i = 1; i <= 26; i++) {
      map.addAll({String.fromCharCode((96 + i)): i});
    }
    int n = s.length;
    int m = vals.length;
    for (var i = 0; i < m; i++) {
      map[chars[i]] = vals[i];
    }
    List<int> nums = List.filled(n, 0);
    for (var i = 0; i < n; i++) {
      nums[i] = map[s[i]]!;
    }
    int res = maxSubArraySum(nums);

    return res.isNegative ? 0 : res;
  }

  int maxSubArraySum(List<int> a) {
    int size = a.length;
    int maxSoFar = -2147483648, maxEndingHere = 0;

    for (int i = 0; i < size; i++) {
      maxEndingHere = maxEndingHere + a[i];
      if (maxSoFar < maxEndingHere) {
        maxSoFar = maxEndingHere;
      }
      if (maxEndingHere < 0) {
        maxEndingHere = 0;
      }
    }
    return maxSoFar;
  }
}
```