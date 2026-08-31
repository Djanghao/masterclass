# Python3 || Four steps  || T/S: 95% / 88%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/5744568/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/5744568/)

---

Here's the plan, in broad strokes:

1. Map the string of digits to a list of integers, which is mutable, and make a deep copy, `perm`, to mutate.

2. Iterate on `perm` to determine the *k*th-least permutation.
3. Determine the number of moves required to move from`num` to `perm`.
4. Return that number as the solution to the problem.
___
Here's the code:
```
class Solution:
    def getMinSwaps(self, num: str, k: int) -> int:
 
        n, num = len(num), list(map(int,num))               # <-- 1)
        perm = num[::]
 
        for _ in range(k):                                  # <-- 2)
            
            i = n - 1
            while i > 0 and perm[i-1] >= perm[i]: i -= 1
             
            if i > 0:    
                j = n - 1
                while perm[j] <= perm[i-1]:  j -= 1
                perm[i-1], perm[j] = perm[j], perm[i-1]
            perm[i:] = perm[n-1:i-1:-1]

        i = res = 0                                         # <-- 3)
        while i < n:
            j = i
            while perm[j] != num[i]: j += 1
            
            while i < j:
                perm[j-1], perm[j] = perm[j], perm[j-1]
                j -= 1
                res += 1
            
            i+= 1
        
        return res                                          # <-- 4)
```

[https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/submissions/1380711609/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/submissions/1380711609/)

I could be wrong, but I think that time complexity is *O*(*KN* + *N*^2) and space complexity is *O*(*N*), in which *N* ~ `len(num)` and *K* ~ `k`.


