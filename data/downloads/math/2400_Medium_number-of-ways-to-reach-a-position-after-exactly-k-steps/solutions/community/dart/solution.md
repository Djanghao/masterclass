# DART - simple DP solution with HashMap

**Author:** hyungzin
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/5312832/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/5312832/)

---

# Complexity
- Time complexity:
O(k^2)

- Space complexity:
O(k)

# Code
```
class Solution {
  int numberOfWays(int s, int e, int k) {
    final MOD = 1000000007;
    var hm = <int, int>{s: 1};
    for (int i = 0; i < k; i++){
      final temp = <int, int>{};
      for (final key in hm.keys){
        temp[key + 1] = ((temp[key + 1] ?? 0) + hm[key]!) % MOD;
        temp[key - 1] = ((temp[key - 1] ?? 0) + hm[key]!) % MOD;
      }
      hm = temp;
    }
    return hm[e] ?? 0;
  }
}
```