# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3874171/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3874171/)

---

# Code
```
class Solution {
  int minimumSeconds(List<int> nums) {
    final index_db = <int, List<int>>{};
    for (int i = 0; i < nums.length; i++) {
      var list = index_db[nums[i]];
      if (list == null)
        index_db[nums[i]] = list = <int>[];
      list.add(i);
    }
    final N = nums.length;
    var res = 1 << 20;
    index_db.forEach((k,list) {
      var tmp = 0;
      for (int i = 1; i < list.length; i++)
        tmp = max(tmp, (list[i] - list[i - 1]) ~/ 2);
      tmp = max(tmp, (list[0] + N - list.last) ~/ 2);
      res = min(res, tmp);
    });
    return res;
  }
}
```