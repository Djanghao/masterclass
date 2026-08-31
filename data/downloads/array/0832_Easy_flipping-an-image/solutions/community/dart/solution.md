# easy solution

**Author:** mahmoudsalah37
**Votes:** 1
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/4100803/](https://leetcode.com/problems/flipping-an-image/solutions/4100803/)

---


# Code
```
class Solution {
  List<List<int>> flipAndInvertImage(List<List<int>> image) {
      return image
      .map((e) => e.reversed.map((e) => e == 0 ? 1 : 0).toList(growable: false))
      .toList(growable: false);
  }
}
```