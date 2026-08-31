# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/3530809/](https://leetcode.com/problems/least-operators-to-express-number/solutions/3530809/)

---

```C++ []
class Solution {
public:
    int leastOpsExpressTarget(int x, int target) {
        int r = target%x, c = x - r;
        int nr = min(2*r, 1 + 2*(x - r));
        int nc = min(2*c, 1 + 2*(x-c));
        return min(nr + dfs(target - r, x), nc + dfs(target + c, x)) - 1;
    }
private:
    unordered_map<long, int> dp;
    int dfs(long target, int x) {
        if (target == 0)
            return 0;
        if (dp.find(target) != dp.end())
            return dp[target];
        
        long num = target;
        int c = 0;
        long lowestPower = 1;
        
        while (num && (num%x == 0)) {
            num /= x;
            ++c;
            lowestPower *= x;
        }
        int lowestPowerCoeff = (target/lowestPower)%x;
        int distToHigherPower = lowestPower*(x - lowestPowerCoeff);
       
        if (lowestPowerCoeff*lowestPower == target) {
            dp[target] = min(lowestPowerCoeff*c, (x - lowestPowerCoeff)*c + c + 1);
            return dp[target];
        }
        int dp1 = lowestPowerCoeff*c + dfs(target - lowestPowerCoeff*lowestPower, x);
        int dp2 = (x - lowestPowerCoeff)*c + dfs(target + distToHigherPower, x);
        
        dp[target] = min(dp1, dp2); 
        return dp[target];
    }
};
```

```Python3 []
class Solution:
    def leastOpsExpressTarget(self, x: int, target: int) -> int:

        pos = neg = k = 0
        while target:
            target, cur = divmod(target, x)
            if k:
                pos, neg = min(cur * k + pos, (cur + 1) * k + neg), min((x - cur) * k + pos, (x - cur - 1) * k + neg)
            else:
                pos, neg = cur * 2, (x - cur) * 2
            k += 1
        return min(pos, k + neg) - 1
```

```Java []
class Solution {
    public int leastOpsExpressTarget(int x, int y) {
        int pos = 0, neg = 0, k = 0, pos2, neg2, cur;
        while (y > 0) {
            cur = y % x;
            y /= x;
            if (k > 0) {
                pos2 = Math.min(cur * k + pos, (cur + 1) * k + neg);
                neg2 = Math.min((x - cur) * k + pos, (x - cur - 1) * k + neg);
                pos = pos2;
                neg = neg2;
            } else {
                pos = cur * 2;
                neg = (x - cur) * 2;
            }
            k++;
        }
        return Math.min(pos, k + neg) - 1;
    }
}
```
