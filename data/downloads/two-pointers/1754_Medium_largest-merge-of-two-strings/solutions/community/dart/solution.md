# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/4029329/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/4029329/)

---

# Code
```
class Solution {
  String largestMerge(String word1, String word2) {
    List<String> work = [];
    int i = 0, j = 0;
    while (i < word1.length && j < word2.length) {
      if (word1.codeUnitAt(i) > word2.codeUnitAt(j)) {
        work.add(word1.substring(i, i + 1));
        i++;
      } else if (word1.codeUnitAt(i) < word2.codeUnitAt(j)) {
        work.add(word2.substring(j, j + 1));
        j++;
      } else {
        String ij = word1.substring(i) + word2.substring(j);
        String ji = word2.substring(j) + word1.substring(i);
        if (ij.compareTo(ji) >= 0) {
          work.add(word1.substring(i, i + 1));
          i++;
        } else {
          work.add(word2.substring(j, j + 1));
          j++;
        }
      }
    }
    work.add(word1.substring(i));
    work.add(word2.substring(j));
    return work.join();
  }
}

```