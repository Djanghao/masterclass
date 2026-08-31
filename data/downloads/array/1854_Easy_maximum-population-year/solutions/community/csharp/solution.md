# Simple prefix-sum solution | C# | +96% efficient

**Author:** Baymax_
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/3347014/](https://leetcode.com/problems/maximum-population-year/solutions/3347014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Every log indicates a birth and death year of a person. We need to calculate for every year how many people are alive.

# Approach
<!-- Describe your approach to solving the problem. -->
We'll create a prefix sum of population over the years - in a given year how many people are alive (B-D -> born on same year or previous year - died this year)

### Please upvote if you liked the simplicity of the solution

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {
    public int MaximumPopulation(int[][] logs) {
        int[] population = new int[101];
        foreach (var log in logs)
        {
            population[log[0] - 1950]++;
            population[log[1] - 1950]--;
        }
        Console.WriteLine("here..");

        int maxYear = 0;
        for (int i = 1; i < population.Length; i++)
        {
            population[i] += population[i - 1];
            maxYear = population[i] > population[maxYear] ? i : maxYear;
        }

        return (1950 + maxYear);
    }
}
```