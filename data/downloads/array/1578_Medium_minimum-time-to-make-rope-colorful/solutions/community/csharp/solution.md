# C# Solution for Minimum Time To Make Rope Colourful Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463710/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463710/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach aims to iteratively determine the minimum time Bob needs to make the rope colorful by tracking the current and previous colors, associated times, and costs. It dynamically updates the costs based on whether the current color matches the previous one or not, ensuring the rope has no consecutive balloons of the same color.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Iterative Dynamic Programming:
	\u2022	The solution iterates through the given color sequence and updates costs based on the conditions specified.
2.	Tracking Key Variables:
	\u2022	It tracks previousColor, previousTime, currentCost, and previousCost to make optimal decisions while considering consecutive colors and their associated times.
3.	Cost Calculation for Same/Different Color:
	\u2022	When the current color matches the previous one, it calculates the minimum time between the current and previous time and updates the costs accordingly.
	\u2022	If the current color is different, it carries over the previous cost to the current cost, updating previousColor and previousTime for the next iteration.
4.	Final Result:
	\u2022	After processing all colors, previousCost holds the minimum time required to paint the entire sequence, which is returned as the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where \u2018n\u2019 is the length of the colors sequence. It involves a single pass through the colors string, performing constant time operations within each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because the solution uses a constant amount of extra space for storing variables (no extra data structures are used that scale with the input size).

# Code
```
public class Solution {
    public int MinCost(string colors, int[] neededTime) {
        int n = colors.Length;
        char previousColor = ' ';
        int previousTime = 0;
        int currentCost = 0;
        int previousCost = 0;

        for (int i = 0; i < n; i++) {
            if (colors[i] == previousColor) {
                int currentMinTime = Math.Min(neededTime[i], previousTime);
                currentCost = currentMinTime + previousCost;
                previousTime = Math.Max(neededTime[i], previousTime);
            } else {
                currentCost = previousCost;
                previousColor = colors[i];
                previousTime = neededTime[i];
            }
            previousCost = currentCost;
        }

        return previousCost;
    }
}
```