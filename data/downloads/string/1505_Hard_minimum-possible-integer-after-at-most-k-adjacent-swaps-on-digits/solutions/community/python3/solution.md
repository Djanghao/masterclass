# [Python3] brute force

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/720123/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/720123/)

---

Algo
Scan through the string. At each index, look for the smallest element behind it within k swaps. Upon finding such minimum, swap it to replece the current element, and reduce k to reflect the swaps. Do this for all element until k becomes 0. 

`O(N^2)` time & `O(N)` space 
```
class Solution:
    def minInteger(self, num: str, k: int) -> str:
        n = len(num)
        if k >= n*(n-1)//2: return "".join(sorted(num)) #special case
        
        #find smallest elements within k swaps 
        #and swap it to current position 
        num = list(num)
        for i in range(n):
            if not k: break 
            #find minimum within k swaps
            ii = i
            for j in range(i+1, min(n, i+k+1)): 
                if num[ii] > num[j]: ii = j 
            #swap the min to current position 
            if ii != i: 
                k -= ii-i
                for j in range(ii, i, -1):
                    num[j-1], num[j] = num[j], num[j-1]
        return "".join(num)
```