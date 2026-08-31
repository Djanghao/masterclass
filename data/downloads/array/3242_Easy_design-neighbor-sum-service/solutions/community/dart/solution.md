# My Simple Brute-Forced Solution in Dart

**Author:** Garlicman
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5601032/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5601032/)

---

# Thought
Going through this question my first thought was to preprocess your solution, hence why a map was used, also notice the constraint says, the values in grid[i][j] is distinct meaning, our map is safe from clashes, so we simply loop through everything, get the adjacent sum of each number, then loop through everything to get the diagonal sum - remember since we can't obtain grid[-1] or grid[grid.length - denoted as gl] we must ensure to check our constraints for such values and return them as 0 in our sum. Edit: of course there are faster ways of doing this in O(n) time, this is wayyy too brute-force but simple to understand


# Complexity
- Time complexity: O(n^2) cause we looped through nxn times should be O(2n^2) though, but 2 is a constant.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2n) -> O(n); where n = number of elements in the matrix.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class neighborSum {
  Map<int, int> adjsum = {};
  Map<int, int> diagsum = {};

  neighborSum(List<List<int>> grid) {
    int gl = grid.length;

    for(var i = 0; i < gl; i++) {
        for(var j = 0; j < gl; j++) {
            adjsum[grid[i][j]] = (((i-1) < 0) ? 0 : grid[i-1][j]) + (((i+1) >= gl) ? 0 : grid[i+1][j]) + (((j-1) < 0) ? 0 : grid[i][j-1]) + (((j+1) >= gl) ? 0 : grid[i][j+1]);
        }
    }

    for(var i = 0; i < gl; i++) {
        for(var j = 0; j < gl; j++) {
            diagsum[grid[i][j]] = (((i-1) < 0) || ((j-1) < 0)  ? 0 : grid[i-1][j-1]) + (((i+1) >= gl) || ((j-1) < 0) ? 0 : grid[i+1][j-1]) + (((i-1) < 0) || ((j+1) >= gl) ? 0 : grid[i-1][j+1]) + (((j+1) >= gl) || ((i+1) >= gl) ? 0 : grid[i+1][j+1]);
        }
    }

    // print(diagsum);
    // print(adjsum);
  }
  
  int adjacentSum(int value) {
    return adjsum[value] ?? 0;
  }
  
  int diagonalSum(int value) {
    return diagsum[value] ?? 0;
  }
}

/**
 * Your neighborSum object will be instantiated and called as such:
 * neighborSum obj = neighborSum(grid);
 * int param1 = obj.adjacentSum(value);
 * int param2 = obj.diagonalSum(value);
 */
```