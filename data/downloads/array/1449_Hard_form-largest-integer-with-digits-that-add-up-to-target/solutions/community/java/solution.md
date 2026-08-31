# 🔥Java Solution || Linear Dp (Memoization)

**Author:** an_diyora
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/5377088/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/5377088/)

---

```
class Solution {
    public String largestNumber(int[] cost, int target) {
        String[][] dp = new String[target+1][10];
        return helper(cost, target, 9, dp);
    }

    private String helper(int[] cost, int target, int num, String[][] dp) {
        if(target == 0) return "";
        if(num == 0) return "0";

        if(dp[target][num] != null) return dp[target][num];

        String max = "0";
        if(cost[num-1] <= target) {
            String str1 = helper(cost, target-cost[num-1], num, dp);
            if(!str1.equals("0")) max = num + str1;
        }

        String str2 = helper(cost, target, num-1, dp);
        if(str2.length() > max.length() || (str2.length() == max.length() && str2.compareTo(max) > 0)) max = str2;
        return dp[target][num] = max;
    }
}
```