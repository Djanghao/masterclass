# Dart, map solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/5276965/](https://leetcode.com/problems/continuous-subarray-sum/solutions/5276965/)

---

# Code
```
class Solution {
  bool checkSubarraySum(List<int> nums, int k) {
    Map<int, int> map = {0: -1};
    var sum = 0;
    for (final (i, num) in nums.indexed) {
      sum += num;
      sum = sum % k;
      if (map.containsKey(sum)) {
        if (i - map[sum]! >= 2) return true;
      } else {
        map[sum] = i;
      }
    }
    return false;
  }
}

```