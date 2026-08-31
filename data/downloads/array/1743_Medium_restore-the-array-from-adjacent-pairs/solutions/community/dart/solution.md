# Solution Restore the Array From Adjacent Pairs

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/5580340/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/5580340/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> restoreArray(List<List<int>> pairs) {
    Map<int, List<int>> map = {};
    Set<int> set = {};
    for (var pair in pairs) {
      var num1 = pair[0];
      var num2 = pair[1];
      if (!map.containsKey(num1)) {
        map[num1] = [];
      }
      if (!map.containsKey(num2)) {
        map[num2] = [];
      }
      map[num1]!.add(num2);
      map[num2]!.add(num1);
    }
    var store = 0;
    for (var key in map.keys) {
      if (map[key]!.length == 1) {
        set.add(key);
        set.add(map[key]![0]);
        store = map[key]![0];
        break;
      }
    }

    for (var i = 1; i < map.length; i++) {
      var temp = store;
      for (var j = 0; j < map[temp]!.length; j++) {
        if (!set.contains(map[temp]![j])) {
          set.add(map[temp]![j]);
          store = map[temp]![j];
        }
      }
    }

    var arr = List.filled(set.length, 0);
    var k = 0;
    for (var i in set) {
      arr[k++] = i;
    }
    return arr;
  }
}
```