# C# Solution using DP || Easy to understand

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/3676641/](https://leetcode.com/problems/count-number-of-texts/solutions/3676641/)

---


```
public class Solution {
    public int CountTexts(string s) {
        int mod = ((int)1e9) + 7;
        int[] dp = new int[s.Length + 1];
        Array.Fill(dp,-1);
        int solve(int idx){
            if(idx >= s.Length) return 1;
            if(dp[idx] != -1) return dp[idx];
            int options = (s[idx] == '7' || s[idx] == '9') ? 4 : 3;
            
            int right = idx;
            while(right < s.Length && (right - idx) < options && s[right] == s[idx])
                right++;

            long res = 0;
            for (int j = idx + 1; j <= right; j++) res += (solve(j) % mod);
            return dp[idx] = ((int)(res % mod));
        }
        return solve(0) % mod;
    }
}

```