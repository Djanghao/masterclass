# ...

**Author:** quangprox121
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5637983/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5637983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumCardPickup(int[] cards) {
        int minConsecutiveCard = Int32.MaxValue;
        Dictionary<int, int> ChecksPoint = [];

        for (var windowEnd = 0; windowEnd < cards.Length; windowEnd++)
        {
            if (!ChecksPoint.ContainsKey(cards[windowEnd]))
            {
                ChecksPoint.Add(cards[windowEnd], windowEnd);
            }
            else
            {
                minConsecutiveCard = (int)MathF.Min(minConsecutiveCard, windowEnd - ChecksPoint[cards[windowEnd]] + 1);
                ChecksPoint[cards[windowEnd]] = windowEnd;
            }
        }

        return minConsecutiveCard == Int32.MaxValue ? -1 : minConsecutiveCard;
    }
}
```