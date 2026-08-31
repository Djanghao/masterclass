# ✅ One Line Solution

**Author:** MikPosp
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5683435/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5683435/)

---

(Disclaimer: this is not an example to follow in a real project - it is written for fun and training mostly)

# Code #1.1 - One Line
Time complexity: $$O(n)$$. Space complexity: $$O(n)$$. n - num of digits.
```
class Solution:
    def nearestPalindromic(self, n: str) -> str:
        return (l:=len(n),p:=int(n[:(l+1)//2])) and str(min({10**(l-1)-1,10**l+1,*(int((t:=str(p+q))+t[-1-l%2::-1]) for q in (-1,0,1))}-{n:=int(n)},key=lambda v:(abs(v-n),v)))
```

# Code #1.2 - Unwrapped
```
class Solution:
    def nearestPalindromic(self, n: str) -> str:
        l = len(n)
        p, n = int(n[:(l+1)//2]), int(n)
        candidates = {10**(l-1)-1, 10**l+1, *(int((t:=str(p+q)) + t[-1-l%2::-1]) for q in (-1,0,1))} - {n}
        
        return str(min(candidates, key=lambda v: (abs(v-n),v)))
```

(Disclaimer 2: code above is just a product of fantasy packed into one line, it is not claimed to be 'true' oneliners - please, remind about drawbacks only if you know how to make it better)