# PHP solution, DP, O(n)

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house/solutions/4646366/](https://leetcode.com/problems/paint-house/solutions/4646366/)

---

# Code
```
class Solution {
    function minCost($costs) {
        $dp[0] = $costs[0];

        for($i=1;$i<count($costs);$i++){
            $dp[$i][0] = $costs[$i][0]+ min($dp[$i-1][1],$dp[$i-1][2]);
            $dp[$i][1] = $costs[$i][1]+ min($dp[$i-1][0],$dp[$i-1][2]);
            $dp[$i][2] = $costs[$i][2]+ min($dp[$i-1][1],$dp[$i-1][0]);
        }

        return  min(
            $dp[$i-1]
        );
    }
}
```