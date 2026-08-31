# Best Dart Solution

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/3566326/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/3566326/)

---

# Code
```
import 'dart:collection';

class Solution {
    bool uniqueOccurrences(List<int> arr) {
        Map<int, int> map = Map();

        arr.forEach((i) {
            if(map.containsKey(i)){
                map[i] = map[i]! + 1;
            } else map.addAll({i: 1});
        });

        Set<int> hash = {};

        map.forEach((k, v) => hash.add(v));

        print(map);
        print(hash);
        return map.length == hash.length;
    }
}
```