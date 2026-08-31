# Easy python solution with rigorous mathematical proof and intuition

**Author:** lEEtrOOkie
**Votes:** 3
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/1324158/](https://leetcode.com/problems/chalkboard-xor-game/solutions/1324158/)

---

Simply check if the XOR of initial list is 0 and otherwise true if length is even.
```
class Solution:
    def xorGame(self, nums: List[int]) -> bool:
        test, i = 0, 0
        for n in nums:
            test = test ^ n
            i += 1
        return True if test == 0 else i % 2 == 0
```

The key of the problem is to realize that xor is a commutative operator and that `x xor y == 0` iff `x == y`. Thus suppose `a_1 xor a_2 xor a_3 ... xor a_n = b`, we have that removing any `a_i != b` will result in a non-zero iteration. Suppose not, WLOG let $a_1$ be the removed integer by commutativity, then `a_2 xor a_3 ... xor a_n == 0` and thus `a_1 xor a_2 ... a_n == a_1 xor 0 == a_1 != b`, a contradiction. Thus, we have that if there are distinct integers in the list (sufficient but not necessary), we can remove one and make the remaining not zero. 

Thus the only case where we cannot remove any integers is the following `a xor a xor a xor ... a xor a xor b == a` consisting of n-1's a and n's b. For all other cases, we can pick a value different from the Xor product and still make sure the remaining ones are all different. However, note that for this case in particular, we must have  `a xor a xor ... a xor a xor b == 0`, for n-2 many `a` , yet suppose $n$ is even, we have that `a xor a xor ... a xor a == 0` b/c n-2 is also even. Thus we have` 0 xor b == b == 0`, and we can just remove `b`.  This shows that for any n == even, we can always remove one from the list given that the current list is not 0. This proves that Alice will win as long as n is even, and by symmetry she will lose if n is odd


