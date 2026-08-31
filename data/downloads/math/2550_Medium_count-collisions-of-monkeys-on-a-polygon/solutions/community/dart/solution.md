# [Dart] BigInt 2^n - 2 && Mod Handling

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3113004/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3113004/)

---

# Code
```
class Solution {
  int monkeyMove(int n) {
    int mod = 1e9.toInt() + 7;
    int res = BigInt.two.modPow(BigInt.from(n), BigInt.from(mod)).toInt() - 2;
    if (res.isNegative) {
        res += mod;
    }
    return res;
  }
}
```