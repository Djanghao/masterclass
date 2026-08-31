# *EASIEST SOLUTION | BETTER THAN THE MOST VOTED ONE | EXPLAINED*

**Author:** samyak1409
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204095/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204095/)

---

# Intuition

Math Property: Any number can be expressed as the sum (or difference) of powers of two.
Wouldn't it be optimal if we always choose the closest power of 2 everytime in order to perfrom the add or subtract operation?


# Approach
<!-- Describe your approach to solving the problem. -->

Be greedy, and always subtract the nearest power of 2 from `n`.
Note: By `subtract` I do not mean directly subtract, but absolute subtract.
See the code for more understanding.


# Some More Explanation

We want to **minimize** the no. of ops for reducing n to 0.
We're allowed to subtract **as well as add** (imp.) any power of 2 in order to achieve the goal.

Basically we want to reduce n to 0 as soon as possible i.e. with minimum no. of ops, so wouldn't it be optimal to always subtract the closest power of 2 from n, so that it come as close as possible to 0 with every op!

Take an example:
`n = 127`
Closest power of 2: `128`
`n -= 128` => `n` becomes `-1`
Now, back to that "imp." I marked above, we're allowed to add a power of 2 too.
So, for that reason it doesn't matter if n goes -ve even if we only wanted to make it till 0, because at any time we can then add new closest power of 2 to n so that n goes to 0.
Continuing with the example,
`n` was `-1`
Closest power of 2: `1`
`n += 1` => `n` becomes `0`

Hope it helps.


# Complexity

- Time complexity: $$O(log2(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(log2(n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code w/ Comments

```py
class Solution:
    def minOperations(self, n: int) -> int:

        from math import log2

        # Powers of 2: TC = SC = O(log2(n))
        '''
        powers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]
        # Why required till 131072 only? Because n <= 10^5.
        '''
        # (Good Practice) Keep it dynamic so that even if n > 10^5, code will work:
        # powers = [2**i for i in range(int(log2(n))+2)]
        powers = [1 << i for i in range(int(log2(n))+2)]

        ops = 0

        # While `n` doesn't become 0:
        while n:  # TC = O(1) because it doesn't matter what `n` is, we're directly subtracting the closest power of 2 from
            # it, so, it will fall to 0 in a couple of ops only (take a big number and check yourself to get the hang of it)

            # Find the power of 2 which is closest to n: TC = O(log2(n))
            '''
            min_diff, closest = float('inf'), None
            for p in powers:
                if abs(n-p) < min_diff:
                    min_diff, closest = abs(n-p), p
            '''
            # One-liner of above (Thanks for pointing it out @SmittyWerbenjagermanjensen):
            closest = min(powers, key=lambda p: abs(n-p))

            # (Absolute) Subtract it (the closest power of 2):
            n = abs(n-closest)

            ops += 1

        return ops
```


# Just Code

```py
class Solution:
    def minOperations(self, n: int) -> int:

        pows = [1 << i for i in range(int(log2(n))+2)]
        ops = 0

        while n:
            closest = min(pows, key=lambda p: abs(n-p))
            n = abs(n-closest)
            ops += 1

        return ops
```


**I'm posting this because I saw the posted solutions and realized they are not the easiest,**
**So, like this so that it goes to top.**
**Thanks!**
