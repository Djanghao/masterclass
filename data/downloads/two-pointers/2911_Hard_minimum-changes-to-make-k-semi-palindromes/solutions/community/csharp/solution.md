# C# solution with basic comments&hints encorporated.

**Author:** thrillobit
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196665/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196665/)

---

# Intuition&Approach
**Follow the hints for the task:**
1. Define dp[i][j] as the minimum count of letter changes needed to split the suffix of string s starting from s[i] into j valid parts.
2. We have dp[i][j] = min(dp[x + 1][j - 1] + v[i][x]). Here v[i][x] is the minimum number of letter changes to change substring s[i..x] into semi-palindrome.
3. v[i][j] can be calculated separately by brute-force. We can create a table of v[i][j] independently to improve the complexity. Also note that semi-palindrome\u2019s length is at least 2.
4. To count v[i][j] (or in my code 'changeToPal') brute force all possible sub-substrings set for a base string substring between left and right indicies.

# Complexity
- Time complexity: O(n^3).

- Space complexity: O(n^2).

# Code
```
public class Solution {
    public const int maxSubstringNum = 101;
    public const int baseValue = (int)1e9; // 1000 000 000

    public int MinimumChanges(string s, int k) {
        int n = s.Length;
        // Define dp[i][j] as the minimum count of letter changes needed to split the suffix of string s starting from s[i] into j valid parts.
        int[,] dp = new int[n, k+1];
        for (int i=0; i<n; i++)
            for (int j=0; j<k+1; j++)
                dp[i, j] = baseValue;
        
        // We have dp[i][j] = min(dp[x + 1][j - 1] + v[i][x]).
        // Here v[i][x] is the minimum number of letter changes to change substring s[i..x] into semi-palindrome. - changeToPal value -
        for (int i=0; i<n; i++) {
            for(int j = 0; j<i; j++) {
                int changeToPal = CTP(j, i, ref s);                
                for (int p=1; p<k+1; p++) {
                    if(p == 1 && j == 0)
                        dp[i,p] = Math.Min(dp[i, p], changeToPal);
                    else if(p > 0 && j > 0)
                        dp[i,p] = Math.Min(dp[i, p], dp[j-1,p-1] + changeToPal);
                }
            }
        }

        return dp[n-1, k];
    }

    // v[i][j] - changeToPal value - can be calculated separately by brute-force. 
    private int CTP(int l, int r, ref string s) {
            if (r-l == 1)
                return s[l] == s[r] ? 0 : 1;
            
            // Count changes value for each valid substring length - t -
            int ans = baseValue;
            for (int t=1; t<r-l; t++){
                if ((r-l+1) % t != 0) continue;
                
                string[] str = new string[maxSubstringNum];
                Array.Fill(str, "");
                for(int i=l; i<r+1; i++)
                    str[(i-l+1) % t] += s[i];
                
                int changes = 0;
                for (int d=0; d<maxSubstringNum; d++)
                    if(str[d].Length > 0) {
                        for(int i=0, j=str[d].Length-1; i<j+1; i++, j--)
                            if (str[d][i] != str[d][j])
                                changes ++;
                    }
                    // break if we reached the void tail
                    else break;

                ans = Math.Min(ans, changes);
            }

            return ans;
    }
}
```