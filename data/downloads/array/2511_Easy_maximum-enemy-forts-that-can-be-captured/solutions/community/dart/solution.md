# dart simple solution

**Author:** NandhuKrishna
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4467943/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4467943/)

---


class Solution {
  int captureForts(List<int> forts) {
     int i = 0;
  int j = 0;
  int maxE = 0;

  while (j < forts.length) {
    if (forts[j] != 0) {
      if (forts[j] == -forts[i]) {
        maxE = max(maxE, j - i - 1);
      }
      i = j;
    }
    j++;
  }
  return maxE;
  }
}
```