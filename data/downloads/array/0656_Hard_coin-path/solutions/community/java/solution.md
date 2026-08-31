# Java O(N * M) 100% Faster. 3ms

**Author:** sKipper97
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/3702219/](https://leetcode.com/problems/coin-path/solutions/3702219/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic Programming
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(CoinsLength * MaxJump)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(CoinLength) 
# Code
```
class Solution {
    public List<Integer> cheapestJump(int[] coins, int maxJump) {
        int[] dp = new int[coins.length];
        dp[coins.length-1] = coins[coins.length-1];
        for(int i=coins.length-2;i>=0;i--) {
            int minCost = 100001, limit = Math.min(coins.length, i + maxJump + 1);
            for(int j=i+1;j<limit;j++) {
                if(coins[j]!=-1) minCost = Math.min(minCost, dp[j]);
            }
            dp[i] = coins[i] + minCost;
        }
        List<Integer> list = new ArrayList<>();
        if(dp[0]>=100001) return list;

        int i=0;
        while(i!=coins.length-1) {
            list.add(i+1);
            int limit = Math.min(coins.length, i + maxJump + 1), next = -1, num = Integer.MAX_VALUE;
            for(int j=i+1;j<limit;j++) {
                if(dp[i] - coins[i] == dp[j]) {
                    if(coins[j] < num) {
                        next = j;
                        num = coins[j];
                    }
                }
            }
            i = next;
        }
        list.add(coins.length);
        return list;
    }
}
```