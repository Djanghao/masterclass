# Python - Bottom up DP - Explained

**Author:** ajith6198
**Votes:** 23
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/1472969/](https://leetcode.com/problems/distinct-subsequences/solutions/1472969/)

---

**Brute force way to do it:**

Generate all subsequences of s and check if each one matches t.
This will be TLE for even smaller inputs as time complexity for finding all subsequences of a string of length n will be ```2^n```

So, dynamic programming is the only option to solve it efficiently


**DP - Explanation:**

We will form the dp formula by considering a scenario

Let's assume we have traversed some steps through string s and currently we are at ```i``` th position
And we have traversed some steps through string t and currently we are at ```j``` th position

If the character at ```i```th position in ```s``` and charater at ```j```th position in ```t```, are matching,
then, we can extend all subsequences that were formed by considering ```i-1``` characters in ```s``` and ```j-1``` characters in ```t```,  by adding the current character to all those subsequences

Another possibility is, let's say we skip the current character and choose not to add it to previosly formed subsequences.
Then, in this case, the number of subsequences will stay the same as number of subsequences formed using ```i-1``` chatracters of ```s```.

Note that, if the character at ```i```th position in ```s``` and charater at ```j```th position in ```t```, are not matching,
we are left with only option 2 as we cannot choose current character to extend all previously formed subsequences

**Base cases:**
If the string ```t``` is empty, there is only one way to form an empty string from string ```s``` (of any length) - by skipping all characters
So, ```dp[i][0] = 1 for i in range(0, len(s))```

When string ```s``` is empty and string ```t``` is not empty, then we can never form ```t``` from ```s```.
So, ```dp[0][j] = 0 for j in range(1, len(t))```


Initial dp table for ```s (len = 6) and t (len = 6)```

```
  0 1 2 3 4 5 6 
0 1 0 0 0 0 0 0
1 1
2 1
3 1
4 1
5 1
6 1
```

**Code:**
```
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m = len(s)
        n = len(t)
        dp = [[0] * (n+1) for _ in range(m+1)]
        
        for i in range(m+1):
            dp[i][0] = 1
        
        """redundant, as we have initialised dp table with full of zeros"""
#         for i in range(1, n+1): 
#             dp[0][i] = 0
        
        for i in range(1, m+1):
            for j in range(1, n+1):
                dp[i][j] += dp[i-1][j] 			#if current character is skipped
                if s[i-1] == t[j-1]:
                    dp[i][j] += dp[i-1][j-1]	#if current character is used
        
        return dp[-1][-1]
```         

**Time and space complexity: O(m*n)**
