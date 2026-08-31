# ✅Hash Map | Easy and Clean Code (C++ / Java / C#) Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583231/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583231/)

---

# Intuition
The idea is to **precompute** these sums during initialization and store them for quick retrieval later.

# Approach
- Create two **HashMaps**: one for **adjacent** sums and one for **diagonal** sums.
- Iterate through each cell in the grid.
- For each cell value, calculate and accumulate:
    - The sum of its **adjacent** neighbors (**up, down, left, right**)
    - The sum of its **diagonal** neighbors (**top-left, top-right, bottom-left, bottom-right**)
- Store these sums in the respective **HashMaps**, using the cell value as the key.
- Return sums for any given value.

# Complexity
- Time complexity: **O(m*n)**
- Space complexity: **O(k)**, where k is the number of unique values in the grid.


```Java []
class neighborSum {
    HashMap<Integer, Integer> adjacent = new HashMap<>();
    HashMap<Integer, Integer> diagonal = new HashMap<>();

    public neighborSum(int[][] grid) {
        int m = grid.length;
        int n = grid.length;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                int value = grid[i][j];
                adjacent.put(value, adjacent.getOrDefault(value, 0));
                adjacent.put(value, adjacent.get(value) + (i - 1 >= 0 ? grid[i - 1][j] : 0));
                adjacent.put(value, adjacent.get(value) + (i + 1 < m  ? grid[i + 1][j] : 0));
                adjacent.put(value, adjacent.get(value) + (j - 1 >= 0 ? grid[i][j - 1] : 0));
                adjacent.put(value, adjacent.get(value) + (j + 1 < n  ? grid[i][j + 1] : 0));

                diagonal.put(value, diagonal.getOrDefault(value, 0));
                diagonal.put(value, diagonal.get(value) + (i + 1 < m  && j + 1 < n  ? grid[i + 1][j + 1] : 0));
                diagonal.put(value, diagonal.get(value) + (i + 1 < m  && j - 1 >= 0 ? grid[i + 1][j - 1] : 0));
                diagonal.put(value, diagonal.get(value) + (i - 1 >= 0 && j - 1 >= 0 ? grid[i - 1][j - 1] : 0));
                diagonal.put(value, diagonal.get(value) + (i - 1 >= 0 && j + 1 < n  ? grid[i - 1][j + 1] : 0));
            }
    }
    
    public int adjacentSum(int value) {
        return adjacent.get(value);
    }
    
    public int diagonalSum(int value) {
        return diagonal.get(value);
    }
}
```
```C++ []
class neighborSum {
public:
    unordered_map<int, int> adjacent;
    unordered_map<int, int> diagonal;
    neighborSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                int value = grid[i][j];
                adjacent[value] += (i - 1 >= 0 ? grid[i - 1][j] : 0);
                adjacent[value] += (i + 1 <  m ? grid[i + 1][j] : 0);
                adjacent[value] += (j - 1 >= 0 ? grid[i][j - 1] : 0);
                adjacent[value] += (j + 1 <  n ? grid[i][j + 1] : 0);

                diagonal[value] += (i + 1 <  m && j + 1 <  n ? grid[i + 1][j + 1] : 0);
                diagonal[value] += (i + 1 <  m && j - 1 >= 0 ? grid[i + 1][j - 1] : 0);
                diagonal[value] += (i - 1 >= 0 && j - 1 >= 0 ? grid[i - 1][j - 1] : 0);
                diagonal[value] += (i - 1 >= 0 && j + 1 <  n ? grid[i - 1][j + 1] : 0);
            }    
    }
    
    int adjacentSum(int value) {
        return adjacent[value];        
    }
    
    int diagonalSum(int value) {
        return diagonal[value];         
    }
};
```
```C# []
public class neighborSum {
    Dictionary<int, int> adjacentSum;
    Dictionary<int, int> diagonalSum;

    public neighborSum(int[][] grid) {
        adjacentSum = new Dictionary<int, int>();
        diagonalSum = new Dictionary<int, int>();
        var m = grid.Length;
        var n = grid.Length;
        for (var i = 0; i < m; i++)
            for (var j = 0; j < n; j++) {
                var value = grid[i][j]; 
                adjacentSum.Add(value, 0);
                adjacentSum[value] += i - 1 >= 0 ? grid[i - 1][j] : 0;
                adjacentSum[value] += i + 1 <  m ? grid[i + 1][j] : 0;
                adjacentSum[value] += j - 1 >= 0 ? grid[i][j - 1] : 0;
                adjacentSum[value] += j + 1 <  n ? grid[i][j + 1] : 0;

                diagonalSum.Add(value, 0);
                diagonalSum[value] += i + 1 < m  && j + 1 < n  ? grid[i + 1][j + 1] : 0;
                diagonalSum[value] += i + 1 < m  && j - 1 >= 0 ? grid[i + 1][j - 1] : 0;
                diagonalSum[value] += i - 1 >= 0 && j - 1 >= 0 ? grid[i - 1][j - 1] : 0;
                diagonalSum[value] += i - 1 >= 0 && j + 1 < n  ? grid[i - 1][j + 1] : 0;
            }
    }
    
    public int AdjacentSum(int value) {
        return adjacentSum[value];
    }
    
    public int DiagonalSum(int value) {   
        return diagonalSum[value]; 
    }
}
```
