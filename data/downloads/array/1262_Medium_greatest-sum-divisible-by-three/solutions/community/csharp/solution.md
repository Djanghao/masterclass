# Solutions using DP C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5612482/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5612482/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxSumDivThree(int[] nums) {
        int[] dp = new int[3];
        foreach (int num in nums) 
        {
            int[] temp = new int[dp.Length];
            for(int i = 0; i < temp.Length; i++)
            {
                temp[i] = dp[i];
            }
            foreach (int sum in temp) 
            {
                int k = (sum + num) % 3;
                dp[k] = Math.Max(dp[k], sum + num);
            }
        }
        
        return dp[0];
    }
}

```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
