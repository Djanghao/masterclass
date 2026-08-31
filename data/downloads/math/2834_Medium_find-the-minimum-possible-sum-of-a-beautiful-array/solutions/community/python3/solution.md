# Python 3 || 4 lines, mathematics, w/ explanation || T/S: 92% / 96%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4034071/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/4034071/)

---

*T I've revised  my original solution in order to deal with  testcases cases added in spring 2024, which cause many previous AC solutions to TLE (like mine).*
___

Here's the plan:


- We deal with the edge case in which target is not less than  twice `n`, in which implies that we just sum the first `n` integers.

- We start with *Z+* = `1,2,3,4,...`, the sequence of positive integers. 
- We discard the larger of any pair that sums to `target`; it should be clear that an integer `num` will be discarded if and only if 
```
                             target//2 < num < target
```
 - We return the sum of the minimal `n` remaining terms in *Z+*. 
 ____

For example, 
 - If *n* = 14 and *k* = 18, then from *Z+*, we accept `1, 2,.., 9`, w we discard `*10, 11, ..., 17*, ` (because 10+8 = 17+1 = 18), and we accept `18, 19, ..., 22` to get our 14 terms.

- We return the sum of the first 14 elements of this subsequence of *Z+* and perform some algebra to simplify the computation:

```  
     sum([1,2,3,4,5,6,7,8,9 ,_,_,_,_,_,_,_,_, 18,19,20,21,22) = 
        = (1 + 2 + ...  + 9) + (18 + 19 + ... + 22)
        = (1 + 2 + ...  + 9) + (10+8 + 11+8 + ... 14+8)
        = (1 + 2 + ... + 14) + (   8 +    8 + ... +  8)
        = 14(14+1)//2 + (5 * 8) = 145
```
____
Here's the code:

(I'll leave it to the reader to sort out the details of the modular division in the code.)
```
class Solution:
    def minimumPossibleSum(self, n: int, target: int) -> int:

        sm = (n+1)*n//2 %1_000_000_007

        if target >= 2*n:  return sm 
      
        sm+= (n - target//2) * ((target-1)//2)
        
        return sm %1_000_000_007
```

[https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/submissions/1292947766/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/submissions/1292947766/)


I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1)