# ☑️ Finding Kth Smallest Element in a Sorted Matrix using Dart. ☑️

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/6124922/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/6124922/)

---

# Code
```dart []
class Solution {
  int kthSmallest(List<List<int>> matrix, int k) {
    List<int> list = [];
    for(var elem in matrix){
        list.addAll(elem);
    }

    list.sort((a, b) => a.compareTo(b));
    return list[k-1];
  }
}
```