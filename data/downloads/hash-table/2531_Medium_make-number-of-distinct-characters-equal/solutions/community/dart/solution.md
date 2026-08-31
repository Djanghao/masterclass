# [Dart] O(DiffWord1) * O(DiffWord2) & Clean Code

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3031166/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3031166/)

---

# Intuition
Add, Minus

# Approach
HashMap

# Complexity
- Time complexity:
O(DiffWord1) * O(DiffWord2)

- Space complexity:
O(DiffWord1) * O(DiffWord2)

# Code
```
import "dart:collection";

class Solution {
  bool isItPossible(String word1, String word2) {
    int n = word1.length;
    int m = word2.length;
    HashMap<String, int> map1 = HashMap();
    HashMap<String, int> map2 = HashMap();

    void plusOne(HashMap<String, int> map, String key) =>
        map.update(key, (value) => value + 1, ifAbsent: () => 1);

    void minusOne(HashMap<String, int> map, String key) {
      map.update(key, (value) => value - 1);
      if (map[key] == 0) {
        map.remove(key);
      }
    }

    for (var i = 0; i < n; i++) {
      plusOne(map1, word1[i]);
    }

    for (var i = 0; i < m; i++) {
      plusOne(map2, word2[i]);
    }
    var keys1 = map1.keys.toList();
    var keys2 = map2.keys.toList();

    for (var i = 0; i < keys1.length; i++) {
      minusOne(map1, keys1[i]);
      plusOne(map2, keys1[i]);

      for (var j = 0; j < keys2.length; j++) {
        plusOne(map1, keys2[j]);
        minusOne(map2, keys2[j]);

        if (map1.length == map2.length) {
          return true;
        }

        minusOne(map1, keys2[j]);
        plusOne(map2, keys2[j]);
      }
      plusOne(map1, keys1[i]);
      minusOne(map2, keys1[i]);
    }

    return false;
  }
}
```