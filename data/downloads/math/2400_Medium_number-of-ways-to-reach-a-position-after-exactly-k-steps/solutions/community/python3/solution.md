# Python3 ||  3 lines, combs, w/ explanation  ||  T/S: 90% / 98%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2554923/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2554923/)

---

A few points on the problem:
- The start and end is a "red herring." The answer to the problem depends only on the distance (`dist = endPos-startPos`) and `k`.
  
- A little thought will convince one that there are no paths possible if `k%2 != dist%2` or if `abs(dist) > k`.

- The problem is equivalent to: *Determine the count of distinct lists of length k with sum = dist and elements 1 and -1, in which the counts of 1s and -1s in each list differ by dist.*
 
- The count of the lists is equal to the number of ways  the combination 
     `comb((k, (dist+k)//2))`. For example, if *dist* = 1 and *k* = 5, the count of 1s is (5+1)//2 = 3, and comb(5,3) = 10. (Note that if dist= -1 in this example, (5-1)//2 = 2, and comb(5,2) = 10)

```
class Solution:          
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:

        dist = endPos-startPos

        if k%2 != dist%2 or abs(dist) > k: return 0

        return comb(k, (dist+k)//2) %1_000_000_007
```

[https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/submissions/1288292953/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/submissions/1288292953/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).