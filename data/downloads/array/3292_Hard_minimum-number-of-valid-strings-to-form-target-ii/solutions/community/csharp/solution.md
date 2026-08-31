# KMP + DP

**Author:** bora_marian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5816164/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5816164/)

---

Compute the KMP suffix length as prefix for the concatenation: (word + "#" + target) and check for target's suffixes which is the length of prefix.
For KMP explanation refer to Tushar Roy's video: [https://www.youtube.com/watch?v=GTJr8OvyEVQ](https://www.youtube.com/watch?v=GTJr8OvyEVQ)
$$dp[i]$$ represents the minimum number of 'good' strings up to position \uD835\uDC56
$$dp[i] = dp[i - l] + 1$$, where \uD835\uDC59 is the length of the word's prefix that matches the target's suffix ending at position \uD835\uDC56.

\uD83D\uDCAA\uD83D\uDE80Keep leetcoding! Keep improving!
# Code
```csharp []
public class Solution {
    public int MinValidStrings(string[] words, string target) 
    {
        int nt = target.Length;
        int[] dp = new int[nt + 1];
        HashSet<int>[] preLengths = new HashSet<int>[nt + 1];
        for (int i = 0; i <= nt; i++) 
        {
            dp[i] = nt + 1;
            preLengths[i] = new HashSet<int>();
        }

        dp[0] = 0;
        foreach(var word in words) 
        {
            StringBuilder sb = new StringBuilder(word);
            sb.Append("#");
            sb.Append(target);
            var lpsConcat = CalculateSuffixAsPrefixKMP(sb.ToString());       
            for (int i = 0; i < nt; i++) 
            {               
                int posInConcat = word.Length + i + 1;  
                if (lpsConcat[posInConcat] > 0) 
                {                   
                    preLengths[i].Add(lpsConcat[posInConcat]);
                }                   
            }
        }
        
        for (int i = 0; i < nt; i++) 
        {
            foreach(var len in preLengths[i]) 
            {
                dp[i + 1] = Math.Min(dp[i + 1 - len] + 1, dp[i+1]);
            }
        }
        
        return dp[nt] > nt ? -1 : dp[nt];
    }

    public int[] CalculateSuffixAsPrefixKMP(string s) 
    {
        int n = s.Length;
        int[] lps = new int[n];
        lps[0] = 0;
        for (int i = 1; i < n; i++) 
        {
           int t = lps[i-1];
           
            while (t > 0 && s[i] != s[t])
                t = lps[t-1];
            if (s[i] == s[t])
                t++;
            lps[i] = t;
        }
        return lps;
    }
}
public class DescendingComparer : IComparer<int>
{
    public int Compare(int x, int y)
    {
        return y.CompareTo(x);
    }
}
```