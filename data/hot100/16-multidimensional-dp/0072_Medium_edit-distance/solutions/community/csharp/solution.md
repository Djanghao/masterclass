# C# Bottom-top DP O(n) space

**Author:** maskalek
**Votes:** 6
**Link:** [https://leetcode.com/problems/edit-distance/solutions/3231996/](https://leetcode.com/problems/edit-distance/solutions/3231996/)

---


# Code with O(nm) space
```
public class Solution {
    public int MinDistance(string word1, string word2) {
        var m = word1.Length;
        var n = word2.Length;
        var dp = new int[m+1, n+1];

        for(var i = 0; i <= m; i++)
        {
            dp[i, 0] = i;
        }

        for(var j = 0; j <= n; j++)
        {
            dp[0, j] = j;    
        }

        for(var i = 0; i < m; i++)
        {
            for(var j = 0; j < n; j++)
            {
                if(word1[i] == word2[j])
                {
                    dp[i+1, j+1] = Min(dp[i, j], dp[i, j+1] + 1, dp[i+1, j] + 1);
                }
                else
                {
                    dp[i+1, j+1] = Min(dp[i, j], dp[i, j+1], dp[i+1, j]) + 1;
                }
            }
        }

        return dp[m, n];

        int Min(params int[] arr)
        {
            return arr.Min();
        }
    }
}
```

# Optimized Code with O(n) space
```
public class Solution {
    public int MinDistance(string word1, string word2) {
        var m = word1.Length;
        var n = word2.Length;
        // var dp = new int[m+1, n+1];
        var prevRow = new int[n+1];

        // for(var i = 0; i <= m; i++)
        // {
        //     dp[i, 0] = i;
        // }

        for(var j = 0; j <= n; j++)
        {
            // dp[0, j] = j;    
            prevRow[j] = j;
        }

        for(var i = 0; i < m; i++)
        {
            var curRow = new int[n+1];
            curRow[0] = i + 1;

            for(var j = 0; j < n; j++)
            {
                if(word1[i] == word2[j])
                {
                    // dp[i+1, j+1] = Min(dp[i, j], dp[i, j+1] + 1, dp[i+1, j] + 1);
                    curRow[j+1] = Min(prevRow[j], prevRow[j+1] + 1, curRow[j] + 1);
                }
                else
                {
                    // dp[i+1, j+1] = Min(dp[i, j], dp[i, j+1], dp[i+1, j]) + 1;
                    curRow[j+1] = Min(prevRow[j], prevRow[j+1], curRow[j]) + 1;
                }
            }
            prevRow = curRow;
        }

        // return dp[m, n];
        return prevRow[n];

        int Min(params int[] arr)
        {
            return arr.Min();
        }
    }
}
```