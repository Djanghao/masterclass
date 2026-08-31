# Bit Manipulation solution without any loops with O(1) complexity

**Author:** br3aker
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3015984/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3015984/)

---

# Approach
Basically, **every set bit** would result in an odd number when it becomes the LSB, e.g.
```
110 (6) - even number
110 / 2 -> 11 (3) - odd number

1000 (8) - even number
1000 / 2 -> 100 / 2 -> 10 / 2 -> 1 (1) - odd number
```
This leads to 2 steps: sub 1 and div by 2 for every set bit with *one exception: last set bit, because last set bit would always be a 1, to make zero out of 1 we need to divide it by 2 without any subtractions*.
In other words, every set bit leads to a subtraction and becomes non-set bit after it.

**Every non-set bit** would result in an even number when it becomes the LSB.
In other words, every non-set bit leads to a division.

So, we need:
1. `setBitCount` subtractions
2. `setBitCount - 1` divisions
3. `nonSetBitCount` divisions

`setBitsCount` is so called 'pop count' number.
`nonSetBitCount` is basically a `occupiedBits - setBitsCount` where `occupiedBits` is a number of occupied bits, e.g.
```
110
occupiedBits = 3

10001
occupiedBits = 5
```

**Solution**
`setBitsCount + occupiedBits - 1`

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```cs
// C#
public class Solution {
    public int NumberOfSteps(int num)
    {
        if (num == 0)
        {
            return 0;
        }

        int occupiedBits = sizeof(int) * 8 - BitOperations.LeadingZeroCount((uint)num);
        int popCount = BitOperations.PopCount((uint)num);

        return popCount + occupiedBits - 1;
    }
}
```

P.S.
PopCount (POPCNT) and LeadingZeroCount (LZCNT) are intrinsic operations which are built into a wide range of modern CPUs:
https://www.felixcloutier.com/x86/lzcnt
https://www.felixcloutier.com/x86/popcnt