# Solution

**Author:** deleted_user
**Votes:** 439
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3529313/](https://leetcode.com/problems/tallest-billboard/solutions/3529313/)

---

```C++ []
class Solution {
public:
  int tallestBillboard(vector<int>& rods) {
    int sum = 0;
    for (int rod : rods) {
      sum += rod;
    }
    int dp[sum + 1];
    dp[0] = 0;
    for (int i = 1; i <= sum; i++) {
      dp[i] = -1;
    }
    for (int rod : rods) {
      int dpCopy[sum + 1];
      copy(dp, dp + (sum + 1), dpCopy);
      for (int i = 0; i <= sum - rod; i++) {
        if (dpCopy[i] < 0) continue;
        dp[i + rod] = max(dp[i + rod], dpCopy[i]);
        dp[abs(i - rod)] = max(dp[abs(i - rod)], dpCopy[i] + min(i, rod));
      }
    }
    return dp[0];
  }
};
```

```Python3 []
class Solution:
    def tallestBillboard(self, rods: list[int]) -> int:
        def diff_h(rods: list[int]) -> dict[int, int]:
            dh = {0: 0}
            for rod in rods:
                for d, h in list(dh.items()):
                    dh[d + rod] = max(dh.get(d + rod, 0), h)
                    dh[abs(d - rod)] = max(dh.get(abs(d - rod), 0), h + min(d, rod))
            return dh

        d1, d2 = diff_h(rods[: len(rods) // 2]), diff_h(rods[len(rods) // 2 :])
        return max(v1 + d2[k1] + k1 for k1, v1 in d1.items() if k1 in d2)
```

```Java []
class Solution {
    public int tallestBillboard(int[] rods) {
        int sum = 0;
        for (int rod : rods) {
            sum += rod;
        }
        int[][] dp = new int[rods.length + 1][sum + 1];
        for (int i = 1; i <= rods.length; i++) {
            for (int j = 0; j <= sum; j++) {
                if (dp[i - 1][j] < j) {
                    continue;
                }
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
                int k = j + rods[i - 1];
                dp[i][k] = Math.max(dp[i][k], dp[i - 1][j] + rods[i - 1]);
                k = Math.abs(j - rods[i - 1]);
                dp[i][k] = Math.max(dp[i][k], dp[i - 1][j] + rods[i - 1]);
            }
        }
        return dp[rods.length][0] / 2;
    }
}
```
