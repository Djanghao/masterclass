# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4481432/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/4481432/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int[] NumMovesStones(int a, int b, int c) {
        var first = Math.Min(a, Math.Min(b, c));
        var third = Math.Max(a, Math.Max(b, c));
        var second = a ^ b ^ c ^ first ^ third;

        var firstGap = second - first - 1;
        var secondGap = third - second - 1;

        if (firstGap == 0 && secondGap == 0)
            return new int[] { 0, 0 };
        else if (firstGap < 2 || secondGap < 2)
            return new int[] { 1, firstGap + secondGap };
        else
            return new int[] { 2, firstGap + secondGap };
    }
}
```