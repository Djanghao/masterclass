# Python DP 2 approaches using LCS  ✅

**Author:** constantine786
**Votes:** 52
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2148966/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2148966/)

---

The prerequisite for this problem is [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/solution/). Please check and solve that problem first before you solve this. Once you have mastered LCS, this problem is easy.

>eg: Input strings: **s1**="sea", **s2**="eat"

**LCS** for above inputs is "ea"
So the number of characters that needs to be deleted from both the strings can be calculated as :
> ***Required number of deletions = length of s1 + length of s2 - 2 * length of LCS***

The LCS can be solved using DP both the methods. I have provided the solutions using two approaches:

## \u2714\uFE0F*Solution I - Memoization - Top Down*
```
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        m,n=len(word1),len(word2)
        @cache
        def lcs(i, j): # find longest common subsequence
            if i==m or j==n:
                return 0            
            return 1 + lcs(i+1, j+1) if word1[i]==word2[j] else  max(lcs(i+1, j), lcs(i,j+1))                               
        # subtract the lcs length from both the strings 
        # the difference is the number of characters that has to deleted
        return m + n - 2*lcs(0,0)
```
**Time - O(m * n)** - to explore all paths
**Space - O(m * n)** - for cache and recursive call stack

----

## \u2714\uFE0F*Solution I I - Tabulation - Bottom Up*
```
class Solution:       
    def minDistance(self, word1: str, word2: str) -> int:
        if len(word1)>len(word2):
            word2,word1=word1,word2        
        
        m,n=len(word1),len(word2)
        prev=[0] * (m+1)
        
        for i in range(n-1, -1, -1):
            curr=[0] * (m+1)
            for j in range(m-1, -1, -1):
                if word1[j] == word2[i]:
                    curr[j]=1 + prev[j+1]
                else:
                    curr[j]=max(curr[j+1], prev[j])
            prev=curr
        return m + n - 2*prev[0]
```

**Time - O(m * n)**
**Space - O(min(m,n))** - for the dp array

---


***Please upvote if you find it useful***