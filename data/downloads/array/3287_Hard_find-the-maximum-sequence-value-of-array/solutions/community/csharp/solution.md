# C# | Dp solution

**Author:** bora_marian
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5810877/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5810877/)

---

# Intuition
$$dp[i][j]$$ = all the possible $$OR$$ values computed till $$i$$ if we choose $$j$$ elements
Dp on left side ^ Dp on the right side to take k elements.
Dp on the right side calculated by reversing nums array.

# Code
```csharp []
public class Solution {
    Dictionary<int, bool>[,] left;
    Dictionary<int, bool>[,] right;
    public int MaxValue(int[] nums, int k) 
    {
        int n = nums.Length, result = 0;
        left = new Dictionary<int, bool>[n + 2, k + 2];
        right = new Dictionary<int, bool>[n + 2, k + 2];

        Dp(nums, k, left);
        Array.Reverse(nums, 0, nums.Length);
        Dp(nums, k, right);
        
        for (int i = k - 1; i + k < n; i++) 
        {
            foreach(var lValue in left[i+1, k].Keys) 
            {
                foreach(var rValue in right[n-1-i, k].Keys) 
                {
                   result = Math.Max(result, lValue ^ rValue);
                }
            }
        }
        
        return result;
    }
    public void Dp(int[] nums, int k, Dictionary<int, bool>[,] memo) 
    {
        for (int i = 0; i <= nums.Length; i++) 
        {
            memo[i, 0] = new Dictionary<int, bool>() {{0, true}};          
        }
        
        for (int i = 0; i < nums.Length; i++) 
        {           
            for (int j = 1; j <= k; j++) 
            { 
                if (j - 1 > i) continue;
                memo[i + 1, j] = new Dictionary<int, bool>();           
                foreach(var key in memo[i, j - 1].Keys) 
                {
                    memo[i + 1, j][key | nums[i]] = true;
                }
                if (j <= i) 
                { 
                    //copy prev values
                    foreach(var key in memo[i, j].Keys) 
                    {
                        memo[i + 1, j][key] = true;
                    }
                }
            }
        }
    }
}
```