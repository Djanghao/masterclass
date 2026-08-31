# [Java] DP with explanation - O(nk)

**Author:** quantuminfo
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211104/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211104/)

---

```M[i][j]``` is with first ```j``` sticks, total number of arrangements to make ```i``` sticks visible. **Please note here the ```j``` sticks doesn't neccessary to be continuous sticks with lengths from ```[1, j]```, they can be any ```j``` sticks with all unique lengths.**

When we add a longer stick (```j```-th), which is longer than all previous ```j - 1``` sticks, to make ```i``` sticks visible (calculating ```M[i][j]```), there are two ways:
1. Select any previous ```j - 1``` stick, let's call it x. Replace x with ```j```-th stick, so with these ```j - 1``` sticks (unselected ```j - 2``` sticks + ```j```-th stick), we have ```M[i][j - 1]``` ways to make ```i``` stick visible. Then we put x at the end, which will not affect the number of visible sticks (there is a ```j```-th stick in front of it somewhere). Since we have ```j - 1``` selections for x, the total ways of arrangement is ```(j - 1) * M[i][j - 1]```.
2. use previous ```j - 1``` sticks, make ```i - 1``` sticks visible and put ```j```-th stick at the end -> ```M[i - 1][j - 1]```.

```
class Solution {
    public int rearrangeSticks(int n, int k) {
        final int MOD = 1_000_000_007;
        long[][] M = new long[k + 1][n + 1];
        M[0][0] = 1;
        for (int i = 1; i <= k; i++) {
            for (int j = 1; j <= n; j++) {
                M[i][j] = ((j - 1) * M[i][j - 1] % MOD + M[i - 1][j - 1]) % MOD;
            }
        }
        return (int) M[k][n];
    }
}
```