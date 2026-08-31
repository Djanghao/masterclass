# 🟢🔴🟢 Beats 100.00% 👏 Best Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/5927282/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/5927282/)

---

```
class Solution {
  int minTimeToType(String word) {
    int second = word.length;
    int prev = 0;
    for(int i = 0; i < word.length; i++){
        int current = word[i].codeUnitAt(0) - 97;
        int dif = (current - prev).abs();
        second += dif > 13 ? 26 - dif : dif;
        prev = current;        
    }
    return second;
  }
}
```