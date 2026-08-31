# Python 3 ||| 8 lines , just bits, no strings or lists || T/S: 54% / 61%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4728086/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4728086/)

---

Here's the plan:

1. We determine`target`, the integer equal to the *bin* interpretation of `patterns`.

1. We iterate through the bit stream until we find an slice with the same length as `patterns` and the same value as `target`.

1. We return the first position of that string.

```
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        
        num, target, ans, n = 0, 0, 0, len(pattern)
        mask = (1<<(n-1))-1

        for bit in pattern:                       # <-- 1.
            target = 2*target + bit               #

        while num != target or ans < n:           # <-- 2.
            num = 2*(num&mask) + stream.next()    #
            ans+= 1

        return ans-n                              # <-- 3.
```
[https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/submissions/1175342240/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/submissions/1175342240/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ count of bits read from the stream.