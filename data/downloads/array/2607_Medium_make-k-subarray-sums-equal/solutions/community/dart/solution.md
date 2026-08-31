# [Dart] O(NLogN) Group and Sum the count of makeEverythingEquals

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3389512/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3389512/)

---

# Intuition
- Make group of given list by k jump. 
- Then, make the group of groups to makeEveryThingEqual and sum the count. 

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```
import 'dart:collection';

class Solution {
  int makeSubKSumEqual(List<int> arr, int k) {
    int n = arr.length;
    List<List<int>> gps = [];
    HashSet<int> visited = HashSet();

    for (var i = 0; i < n; i++) {
      int j = i;
      List<int> gp = [];
      while (visited.add(j % n)) {
        gp.add(arr[j % n]);
        j += k;
      }
      if (gp.isNotEmpty) {
        gps.add(gp);
      }
    }

    int res = 0;
    for (var gp in gps) {
      res += minOperationsToMakeEverythingEquals(gp);
    }

    return res;
  }

  int minOperationsToMakeEverythingEquals(List<int> nums) {
    int n = nums.length;
    nums.sort();
    int mid = nums[n ~/ 2];
    int count = 0;
    for (var x in nums) {
      count += (mid - x).abs();
    }

    return count;
  }
}
```