# [Dart] HashMap approach, Bruh It's tough one in contest

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/3396727/](https://leetcode.com/problems/sum-of-distances/solutions/3396727/)

---

# Intuition
Find LeftSum, LeftCount, RightSum, RightCount of num

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(3*N)

# Code
```
import 'dart:collection';

class Solution {
  List<int> distance(List<int> nums) {
    int n = nums.length;
    List<int> res = List.filled(n, 0);

    HashMap<int, List<int>> totalMap = HashMap(); // [sum, count]
    void plus(HashMap<dynamic, List<int>> map, dynamic key, int i) =>
        map.update(key, (value) => [value[0] + i, value[1] + 1],
            ifAbsent: () => [i, 1]);

    for (var i = 0; i < n; i++) {
      plus(totalMap, nums[i], i);
    }
    HashMap<int, List<int>> curMap = HashMap();

    for (var i = 0; i < n; i++) {
      var x = nums[i];
      plus(curMap, x, i);
      int leftSum = curMap[x]![0];
      int leftCount = curMap[x]![1];
      int rightSum = totalMap[x]![0] - leftSum;
      int rightCount = totalMap[x]![1] - leftCount;
      res[i] = (i * leftCount) - leftSum + rightSum - (i * rightCount);
    }

    return res;
  }
}
```