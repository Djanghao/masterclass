# C# | Self-explanatory | O(n) / O(1)

**Author:** Torge
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/2951101/](https://leetcode.com/problems/best-sightseeing-pair/solutions/2951101/)

---

# Intuition
Each score is calculated as $$score = part1 + part2$$, where:
    $$part1 = value1 + index1$$,
    $$part2 = value2 - index2$$.

# Approach
1. Calculate the first part of the score calculation.
2. Loop through the values:
    a) calculate the second part of the score calculation
    b) calculate the score
    c) update the max score if necessary
    d) check if the current element has more value than the first part; update the first part if necessary.
3. Return the max score.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MaxScoreSightseeingPair(int[] values) {
        var max = 0;
        var v1 = values[0] + 0;

        for (var i = 1; i < values.Length; i++) {
            var v2 = values[i] - i;
            var score = v1 + v2;

            max = Math.Max(max, score);

            var potentialV1 = values[i] + i;
            v1 = Math.Max(v1, potentialV1);
        }
        
        return max;
    }
}
```