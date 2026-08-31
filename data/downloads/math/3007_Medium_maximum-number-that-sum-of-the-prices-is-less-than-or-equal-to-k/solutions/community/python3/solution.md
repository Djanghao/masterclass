# Binary Search Over Answer

**Author:** jeffreyhu8
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561717/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561717/)

---

# Intuition
Let `price(num)` denote the sum of prices from `1` to `num` for some `num`.

It is easier to calculate `price(num)` given `num` than to do it the other way around. In addition, note that `price` is increasing.

Thus, we can binary search over the answer.

# Approach
Given some `num`, how do we find the sum of prices for all integers in `[1, num)`? Look at the bits.

For this example, we use `num = 14` (i.e. we list the numbers up to `13`). We will include `0` to make the explanation nicer.
```
0000
0001
0010
0011
0100
0101
0110
0111
1000
1001
1010
1011
1100
1101
```

How many set bits are in the `i`th bit (0-indexed)? Let's look at the `4`'s place as an example.

The `4`'s place has this pattern in the listing above: `00001111000011`. We see there are groups of `00001111`, with a trailing `000011`.

Thus, the number of `1`'s is the number of `1`s in the groups of `00001111` (i.e. `num // 8 * 4`) plus the `1`'s in the trailing part `000011` (i.e. `max(num % 8 - 4, 0)`).

In general, with a bit of maniuplation, we can get that the number of `1`'s for a given place `1 << i` is
```((num - numModTwoTimesI) // 2) + max(numModTwoTimesI - (1 << i), 0)```,
where `numModTwoTimesI := num % (1 << (i + 1))`.

# Complexity
- Time complexity: $$O((\\lg^2 k) / x)$$

- Space complexity: $$O(1)$$

# Code
```py
class Solution:
    def __init__(self):
        self.x = None

    def price(self, num):
        res = 0
        for i in range(self.x - 1, 64, self.x):
            numModTwoTimesI = num % (1 << (i + 1))
            res += ((num - numModTwoTimesI) >> 1) + max(numModTwoTimesI - (1 << i), 0)
        return res

    def findMaximumNumber(self, k: int, x: int) -> int:
        self.x = x
        return bisect_right(range((1 << 63) - 1), k, key=self.price) - 2

```