# C# Brute Force with combinatorics

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/6082957/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/6082957/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->When approaching this problem, the first intuition involves systematically identifying the columns that contribute most to row coverage. A brute-force solution immediately comes to mind due to the following factors: The Problem's Small Scale: The constraints make it feasible to generate and evaluate all combinations of columns without hitting performance limits.
- Need for Exhaustiveness: Since the goal is to maximize coverage, exploring all possible subsets of numSelect columns ensures that we don't miss any optimal solution.
- Row and Column Coverage: The problem inherently links rows to columns based on 1s in the matrix. A key observation is that a row is covered if all its 1s are matched by the selected columns, which can be checked efficiently.
- Brute-Force Over Combinations: Given that we need to try all possible subsets of columns, generating combinations of columns seems like the natural first step.
- Using a brute-force approach allows us to understand the problem better and serves as a stepping stone for further optimizations, if needed.
___
# Approach
- <!-- Describe your approach to solving the problem. -->Conbinations Generator: This recursive function generates all possible combinations of numSelect columns using a simple backtracking approach.
- Check Covered Rows: For a given set of selected columns, this function iterates over all rows and checks whether the row is covered by the selected columns.
- Brute Force over Combinations: The main loop iterates over all possible column combinations and calculates the number of rows covered for each combination, keeping track of the maximum number of covered rows.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(( n / numSelect) x m x n).
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(numSelect).
___
# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    public int MaximumRows(int[][] matrix, int numSelect) {
        int m = matrix.Length; // Number of rows
        int n = matrix[0].Length; // Number of columns
        int maxCoveredRows = 0;

        // Generate all combinations of numSelect columns
        IEnumerable<List<int>> Combinations(int start, int count, List<int> current) {
            if (current.Count == count) {
                yield return new List<int>(current);
                yield break;
            }
            for (int i = start; i < n; i++) {
                current.Add(i);
                foreach (var combination in Combinations(i + 1, count, current)) {
                    yield return combination;
                }
                current.RemoveAt(current.Count - 1);
            }
        }

        // Check how many rows are covered for a given set of selected columns
        int CountCoveredRows(List<int> selectedColumns) {
            int coveredRows = 0;
            foreach (var row in matrix) {
                bool isCovered = true;
                for (int j = 0; j < n; j++) {
                    if (row[j] == 1 && !selectedColumns.Contains(j)) {
                        isCovered = false;
                        break;
                    }
                }
                if (isCovered) {
                    coveredRows++;
                }
            }
            return coveredRows;
        }

        // Iterate through all combinations of columns and find the maximum rows covered
        foreach (var combination in Combinations(0, numSelect, new List<int>())) {
            maxCoveredRows = Math.Max(maxCoveredRows, CountCoveredRows(combination));
        }

        return maxCoveredRows;
    }
}
```