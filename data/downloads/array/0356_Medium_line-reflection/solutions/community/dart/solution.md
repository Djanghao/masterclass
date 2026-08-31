# Dart: using Set

**Author:** felixrzayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/line-reflection/solutions/3014493/](https://leetcode.com/problems/line-reflection/solutions/3014493/)

---


# Complexity
- Time complexity:
    - $$O(n)$$

- Space complexity:
    - $$O(n)$$

# Code
```
class Solution {
  bool isReflected(List<List<int>> points) {
    int maxP = -9999999;
    int minP = 9999999;

    Set<String> set = {};

    for (var p in points) {
      int x = p[0];
      int y = p[1];

      maxP = max(maxP, x);
      minP = min(minP, x);

      set.add("$x,$y");
    }

    int sum = maxP + minP;

    for (var p in points) {
      var temp = sum - p[0];
      String str = "${temp},${p[1]}";
      if (!set.contains(str)) {
        return false;
      }
    }
    return true;
  }
}
```