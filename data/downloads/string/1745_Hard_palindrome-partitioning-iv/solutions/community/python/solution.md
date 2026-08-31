# [Python] Simple with cache function to check palindrome

**Author:** cloverpku
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1044094/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1044094/)

---

key point is to use a helper function to check if a substring s[i:j+1] is palindrome.
remember to CACHE it with **@lru_cache(None)**, so only cache what have been visisted, and can be used later.
Then just brute force string with two cut points

```
class Solution:
    def checkPartitioning(self, s: str) -> bool:
        n = len(s)
        
        @lru_cache(None)
        def pal(i,j):
            if i == j:
                return True
            if s[i] != s[j]:
                return False
            if i+1 == j:
                return True
            else:
                return pal(i+1,j-1)
            
        for i in range(n-2):
            if pal(0,i):
                for j in range(i+1,n-1):
                    if pal(i+1,j) and pal(j+1,n-1):
                        return True
        return False
```