# Dp

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5510276/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5510276/)

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
    public int MaxScore(int[] nums) {
        int[] dp= new int [nums.Length];
        dp[0]=0;
        for (int i=1; i<nums.Length; i++){
            for(int j=i-1; j>=0; j--){
                dp[i]=Math.Max(dp[i], dp[j]+(i-j)*nums[i]);
            }
        }
        return dp[nums.Length-1];
    }
}
```