# Dart easy solution

**Author:** NandhuKrishna
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4472632/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/4472632/)

---


class Solution {
  int closetTarget(List<String> words, String target, int startIndex) {
    if (words[startIndex] == target) {
      return 0;
    }
    int i = startIndex, j = startIndex;
    int countFori = 0, countForj = 0;
    while (words[i] != target) {
      i--;
      if (i == -1) {
        i = words.length - 1;
      }
      if (i == startIndex) {
        break;
      }
      countFori++;
    }
    while (words[j] != target) {
      j++;
      if (j == words.length) {
        j = 0;
      }
      if (j == startIndex) {
        break;
      }
      countForj++;
    }
    if (i == j && j == startIndex) {
      return -1;
    }
    return (countFori < countForj) ? countFori : countForj;
  }
}
```