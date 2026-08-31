# [Python3] bitwise and

**Author:** ye15
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/746723/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/746723/)

---

Algo
[Bitwise operations](https://en.wikipedia.org/wiki/Bitwise_operation) can be efficiently carried out in the bit space. Here, the focus is "bitwise and", and an important property of "bitwise and" is that its result cannot be larger than its operands since no unset bits could be set. Furthermore, given a series of number `x1, x2, ..., xn`, their prefix "bitwise and", e..g `x1, x1&x2, x1&x2&x3, ...` can only populate a very small space due to the fact that the bits got unset **sequentially**. For example, if `x1` has `p` set bits, then the above series has at most `p` distinctive numbers. This is a very small set for any numbering system be it 32-bit or 64-bit. 

Utilizing this property, this question can be solved in `O(N)` time in contrast to the brute force `O(N^2)` like below which I learned from @qqwqert007 in this [post](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/discuss/743381/Python-6-lines-O(nlogm)-solution). 

```
class Solution:
    def closestToTarget(self, arr: List[int], target: int) -> int:
        ans, seen = inf, set()
        for x in arr: 
            seen = {ss & x for ss in seen} | {x}
            ans = min(ans, min(abs(ss - target) for ss in seen))
        return ans 
```

```
class Solution:
    def closestToTarget(self, arr: List[int], target: int) -> int:
        ans, seen = inf, set()
        for x in arr: 
            tmp = set() #new set 
            seen.add(0xffffffff)
            for ss in seen:
                ss &= x
                ans = min(ans, abs(ss - target))
                if ss > target: tmp.add(ss) #fine tuning 
            seen = tmp
        return ans 
```

A related question is [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) for which bitwise and is applied to a range. This again can be computed very efficiently if we focus on the much smaller space of possible bits instead of the vast range of numbers. 
```
class Solution:
    def rangeBitwiseAnd(self, m: int, n: int) -> int:
        while n > m: 
            n &= n-1 #unset last set bit
        return n 
```