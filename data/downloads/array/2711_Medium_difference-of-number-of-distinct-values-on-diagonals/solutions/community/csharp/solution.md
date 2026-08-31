# C#

**Author:** kpzeus
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3571251/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3571251/)

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
    public int[][] DifferenceOfDistinctValues(int[][] grid) {
        int[][] r = new int[grid.Length][];
        int i=0;
		while(i < r.Length){
            r[i] = new int[grid[0].Length];
			i++;
		}

        i=0;
		while(i < grid.Length){
			int j=0;
			while(j < grid[0].Length){
                r[i][j] = Math.Abs(topLeft(grid, i, j) - bottomRight(grid,i,j));
				j++;
			}
			i++;
		}

        return r;
    }

    private int topLeft(int[][] grid, int i, int j){
        HashSet<int> h = new();

        i--;
        j--;
        while(i > -1 && j > -1){
            h.Add(grid[i][j]);
            i--;
            j--;
        }

        return h.Count;
    }

    private int bottomRight(int[][] grid, int i, int j){
        HashSet<int> h = new();

        i++;
        j++;
        while(i < grid.Length && j < grid[0].Length){
            h.Add(grid[i][j]);
            i++;
            j++;
        }

        return h.Count;
    }
}
```