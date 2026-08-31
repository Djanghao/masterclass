# Using Heap | Python

**Author:** pragya_2305
**Votes:** 13
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243586/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243586/)

---

# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(n)

# Code
```
class Solution:
    def clearStars(self, s: str) -> str:
        heap = []
        for i,c in enumerate(s):
            if c=='*':
                heappop(heap)
            else:
                heappush(heap,(c,-i))
        
        ans = ['']*len(s)
        while heap:
            char,i = heappop(heap)
            ans[-i] = char
            
        return ''.join(ans)
            
        
```