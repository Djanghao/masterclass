# Application of Wilson's theorem

**Author:** treemantan
**Votes:** 7
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/442403/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/442403/)

---

It follows [Wilson's theorem](https://en.wikipedia.org/wiki/Wilson%27s_theorem) to perform one-liner test for prime. But to create the hash table is still quicker.
```python
class Solution(object):
    def countPrimeSetBits(self, L, R):
        """
        :type L: int
        :type R: int
        :rtype: int
        """
        res = 0
        for i in range(L,R+1):
            bits= bin(i).count('1')
            if bits!=1 and math.factorial(bits - 1)  % bits == bits - 1:
                res+=1
        return res
```