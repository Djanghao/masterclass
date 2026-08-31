# [Python 3] Beats Editorial - O(1), O(1)

**Author:** Deimvis
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/3948459/](https://leetcode.com/problems/maximum-number-of-ones/solutions/3948459/)

---

# Intuition
Fill top left corner efficiently

# Approach
1. You need to fill top left corner since ones there will be counted in the smallest number of squares
2. Split matrix into sideLength x sideLength squares, you will repeat this "top-left-corner" pattern in every such square
3. Since width and height are not necessarily divisible by sideLength, there will be some overflowing squares
4. More precisely there are `m // sideLength` overflowing squares on the right and `n // sidelength` overflowing squares in the bottom and 1 overflowing square in bottom right corner
5. Using this knowledge we efficiently distribute ones in the top left corner

# Complexity
- Time complexity: $O(1)$

- Space complexity: $O(1)$

# Code
```python []
class Solution:
    def maximumNumberOfOnes(self, width: int, height: int, sideLength: int, maxOnes: int) -> int:
        m, n = height, width
        ans = maxOnes * ((m // sideLength) * (n // sideLength))  # (m // sideLength) * (n // sideLength) \u2014 number of full (sideLength x sideLength) squares in matrix
        rest = maxOnes

        use1 = min((m % sideLength) * (n % sideLength), rest)  # (m % sideLength) * (n % sideLength) \u2014 size of overflowing square in the bottom right corner
        ans += ((m // sideLength) + (n // sideLength) + 1) * use1  # (m // sideLength) + (n // sideLength) + 1 \u2014 total number of overflowing squares (each of them has an area at least as much as square in bottom right corner)
        rest -= use1

        # m // sideLength \u2014 number of overflowing squares on the right
        # n // sideLength \u2014 numebr of overflowing squares on the left
        if m // sideLength > n // sideLength:
            use2 = min(((n % sideLength) * sideLength) - ((m % sideLength) * (n % sideLength)), rest)
            ans += (m // sideLength) * use2
            rest -= use2
            use3 = min(((m % sideLength) * sideLength) - ((m % sideLength) * (n % sideLength)), rest)
            ans += (n // sideLength) * use3
            rest -= use3
        else:
            use2 = min(((m % sideLength) * sideLength) - ((m % sideLength) * (n % sideLength)), rest)
            ans += (n // sideLength) * use2
            rest -= use2
            use3 = min(((n % sideLength) * sideLength) - ((m % sideLength) * (n % sideLength)), rest)
            ans += (m // sideLength) * use3
            rest -= use3
        return ans

```