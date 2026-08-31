# [Python3] prefix freq

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1201798/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1201798/)

---


```
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        prefix = [[0]*26]
        for c in s: 
            elem = prefix[-1].copy()
            elem[ord(c)-97] += 1
            prefix.append(elem)
        
        ans = []
        for left, right, k in queries: 
            cnt = sum(1&(prefix[right+1][i] - prefix[left][i]) for i in range(26))
            ans.append(cnt <= 2*k+1)
        return ans 
```

Edited on 5/10/2021
Adding solution based on "bit operation"
```
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        prefix = [0]
        for c in s: 
            prefix.append(prefix[-1] ^ (1 << (ord(c)-97)))
        
        ans = []
        for left, right, k in queries: 
            cnt = bin(prefix[right+1] ^ prefix[left]).count("1")
            ans.append(cnt <= 2*k+1)
        return ans 
```