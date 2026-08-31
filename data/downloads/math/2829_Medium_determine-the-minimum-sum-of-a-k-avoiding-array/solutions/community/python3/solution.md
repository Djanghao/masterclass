# Python 3   ||   1 line, mathematics,  w/ a brief explanation ||   T/S: 96% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3935140/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3935140/)

---


Here's the plan:

- We start with *Z+* = `1,2,3,4,...`, the sequence of positive integers. 
- We discard the larger of any pair that sums to `k`; it should be clear that an integer `num` will be discarded if and only if 
```
                         target//2 < num < target
```
 For example, 
 - If *n* = 14 and *target* = 6, then from *Z+*, we accept `1,2,3`, discard `5,4` (because 1+5 = 2+4 = 6), and accept `6,7,8,...`.

- We return the sum of the first 14 elements of this subsequence of *Z+*:

```  
            sum([1,2,3,_,_,6,7,8,9,10,11,12,13,14,15,16]) = 127
```
___

Here's the code:
(Sorting out the details of the modular division in the code is left to the reader.)
```
class Solution:
    def minimumPossibleSum(self, n: int, target: int) -> int:

        return sum (list(chain (range(1,target//2+1),
                                range(target,n+target//2+1)))[:n])
```
[https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/submissions/1026478028/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/submissions/1026478028/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `n`.