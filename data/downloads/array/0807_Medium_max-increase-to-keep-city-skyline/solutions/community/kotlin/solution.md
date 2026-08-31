# [ C++ | Java | Kotlin ] Simple greedy solution, detailed explanation, 0ms, beats 100% 🚀

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/6069319/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/6069319/)

---

# Intuition
The key insight is that for any building, its maximum possible height is limited by the highest building in its row and column, since exceeding either would change the skyline view from that direction.

# Approach
1. Find maximum heights for each row and column:
   - Store row maximums in maxRow[]
   - Store column maximums in maxCol[]

2. Calculate maximum possible increase:
   - For each building (i,j), we can increase its height up to min(maxRow[i], maxCol[j])
   - The total increase possible is this minimum minus current height
   - Sum up all possible increases to get final answer

# Complexity
The solution runs in $$O(n^2)$$ time with $$O(n)$$ extra space.

# Code
```cpp []
class Solution {
public:
   int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
       int n = grid.size();
       vector<int> maxRow(n), maxCol(n);
       
       for (int i = 0; i < n; i++) {
           for (int j = 0; j < n; j++) {
               maxRow[i] = max(maxRow[i], grid[i][j]);
               maxCol[j] = max(maxCol[j], grid[i][j]);
           }
       }
       
       int ans = 0;
       for (int i = 0; i < n; i++) {
           for (int j = 0; j < n; j++) {
               ans += min(maxRow[i], maxCol[j]) - grid[i][j];
           }
       }
       
       return ans;
   }
};
```
```java []
class Solution {
   public int maxIncreaseKeepingSkyline(int[][] grid) {
       int n = grid.length;
       int[] maxRow = new int[n];
       int[] maxCol = new int[n];
       
       for (int i = 0; i < n; i++) {
           for (int j = 0; j < n; j++) {
               maxRow[i] = Math.max(maxRow[i], grid[i][j]);
               maxCol[j] = Math.max(maxCol[j], grid[i][j]);
           }
       }
       
       int ans = 0;
       for (int i = 0; i < n; i++) {
           for (int j = 0; j < n; j++) {
               ans += Math.min(maxRow[i], maxCol[j]) - grid[i][j];
           }
       }
       
       return ans;
   }
}
```
```kotlin []
class Solution {
    fun maxIncreaseKeepingSkyline(grid: Array<IntArray>): Int {
        val maxRow = grid.map { it.max() }

        val n = grid.size
        val maxCol = IntArray(n)
        for (j in 0..<n) {
            for (i in 0..<n) {
                maxCol[j] = max(maxCol[j], grid[i][j])
            }
        }

        var ans = 0
        for (i in 0..<n) {
            for (j in 0..<n) {
                ans += min(maxRow[i], maxCol[j]) - grid[i][j]
            }
        }

        return ans
    }
}
```
![image.png](./images/0.png)
