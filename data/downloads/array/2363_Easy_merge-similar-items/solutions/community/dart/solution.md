# Dart Easy Solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/5344629/](https://leetcode.com/problems/merge-similar-items/solutions/5344629/)

---

# Intuition 
We need to merge the items with the same value. We can do this by creating a map to store the sum of weights of all items with the same value.

# Approach
Create a map to store the sum of weights of all items with value value Iterate over both items1 and items2 and add the weight to the map. Convert the map to a list and sort it by key. Convert the list to the required format and return it.

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> mergeSimilarItems(
    List<List<int>> items1,
    List<List<int>> items2,
  ) {
    Map<int, int> map = {};

    for (var item in items1) {
      if (map.containsKey(item[0])) {
        map[item[0]] = map[item[0]]! + item[1];
      } else {
        map[item[0]] = item[1];
      }
    }

    for (var item in items2) {
      if (map.containsKey(item[0])) {
        map[item[0]] = map[item[0]]! + item[1];
      } else {
        map[item[0]] = item[1];
      }
    }

    var result = map.entries.toList();
    result.sort((a, b) => a.key.compareTo(b.key));

    return result.map((e) => [e.key, e.value]).toList();
  }
}

```