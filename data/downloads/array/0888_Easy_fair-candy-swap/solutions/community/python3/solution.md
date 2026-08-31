# Math behind lee215's solution

**Author:** inversion39
**Votes:** 25
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/2888042/](https://leetcode.com/problems/fair-candy-swap/solutions/2888042/)

---

Assume that alice has sizes $[x_1, x_2, ..., x_m]$, while bob has sizes $[y_1, y_2, ..., y_n]$. Also, we are going to switch $x_a$ and $y_b$ so that they will have some size total at the end. Then, we have

$$\\sum_{i=1}^nx_i - x_a + y_b = \\sum_{j=1}^my_j - y_b + x_a$$

which can be rewritten as 

$$\\sum_{i=1}^nx_i - \\sum_{j=1}^my_j =  2x_a - 2y_b $$

which is

$$diff = \\frac{\\sum_{i=1}^nx_i - \\sum_{j=1}^my_j}{2} =  x_a - y_b $$

Therefore, if `diff + bob_size` is in `aliceSizes`, we know that we find the result. 

Hope this helps.


# Code
```
class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        delta = (sum(aliceSizes) - sum(bobSizes)) // 2
        aliceSizes = set(aliceSizes)
        for size in set(bobSizes):
            if delta + size in aliceSizes:
                return [delta + size, size]
```

