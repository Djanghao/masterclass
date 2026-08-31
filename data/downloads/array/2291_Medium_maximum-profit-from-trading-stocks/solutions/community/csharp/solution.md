# dp

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5555357/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5555357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumProfit(int[] pr, int[] fu, int bu) {        
        int ans=0;
        List<int[]>profit= new List<int[]>();
        for (int i=0; i< pr.Length; i++){
            
        if(fu[i]>pr[i]&& pr[i]<=bu) profit.Add(new int []{pr[i],fu[i]-pr[i] });
        }
        int [,] dp= new int[bu+1,profit.Count+1];
        for(int i=0; i<profit.Count; i++){
            for(int j=0; j<=bu;j++){
                dp[j,i+1]=Math.Max(dp[j,i],dp[j,i+1]);
                if(j>=profit[i][0])dp[j,i+1]=Math.Max(dp[j,i+1], profit[i][1]+dp[j-profit[i][0],i]);
            }
        }

       for (int i=0; i<=profit.Count; i++){
        ans=Math.Max(ans, dp[bu,i]);
       }
       return ans;
    }
}
```