# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4155837/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4155837/)

---

# Code
```
class Solution {
  int getMinSwaps(String num, int k) {
    List<int> work = num.split("").map((e) => int.parse(e)).toList();
    final org = work.toList();
    void next_number() {
      int idx = work.length - 1;
      while (idx != 0 && work[idx - 1] >= work[idx])
        idx--;
      if (idx == 0) return;
      idx--;
      int jdx = work.length - 1;
      while (work[jdx] <= work[idx]) jdx--;
      int tmp = work[idx]; work[idx] = work[jdx]; work[jdx] = tmp;
      for (int a = idx + 1, b = work.length - 1; a < b; a++, b--) {
        tmp = work[a]; work[a] = work[b]; work[b] = tmp;
      }
    }
    while (k-- != 0) next_number();
    var res = 0;
    for (int i = 0; i < org.length; i++) {
      if (org[i] == work[i]) continue;
      int j = i;
      while( work[j] != org[i]) j++;
      res += j - i;
      while (j != i)
        work[j] = work[--j];
    }
    return res;
  }
}
```