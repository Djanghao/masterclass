# Simple O(5) solution with frequency map.

**Author:** Drugged_Monkey
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4759229/](https://leetcode.com/problems/best-poker-hand/solutions/4759229/)

---

# Approach
FIrst I create two `frequency maps`. `s` for `suits` and `r` for `ranks`. Then I traverse `ranks` and `suits` countung frequencies and tracking `maxR` for max number of cards with the same `rank` and `maxS` for max number of cards with the same `suit` simultaneously. And finally I determine the answer in single `switch-case` construction. That's it.

# Complexity
- Time complexity:
$$O(5)$$

- Space complexity:
$$O(5)$$

# Code
```
public sealed class Solution 
{
    private readonly string F = "Flush";
    private readonly string T = "Three of a Kind";
    private readonly string P = "Pair";
    private readonly string H = "High Card";

    public string BestHand(int[] ranks, char[] suits) 
    {
        var s = new int[4];
        var r = new int[14];

        var maxR = 0;
        var maxS = 0;

        for(int i = 0; i < 5; i++)
        {
            var keyR = ranks[i];
            r[keyR]++;
            maxR = Math.Max(maxR, r[keyR]);

            var keyS = suits[i] - 97;
            s[keyS]++;
            maxS = Math.Max(maxS, s[keyS]);
        }

        return (maxS, maxR) switch
        {
            (5, _) => F,
            (_, 4) => T,
            (_, 3) => T,
            (_, 2) => P,
            (_, _) => H
        };
    }
}
```