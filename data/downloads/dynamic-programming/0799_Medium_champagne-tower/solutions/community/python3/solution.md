# ✅98.44%🔥Dynamic Programming & Iterative Approach🔥

**Author:** MrAke
**Votes:** 58
**Link:** [https://leetcode.com/problems/champagne-tower/solutions/4082475/](https://leetcode.com/problems/champagne-tower/solutions/4082475/)

---

# Problem
#### This problem can be viewed as a dynamic programming problem where you are pouring champagne into glasses arranged in a pyramid shape and need to find out how much champagne each glass contains after a certain amount of pouring. The key idea is to track the amount of champagne in each glass by simulating the pouring process row by row.
---
# Solution

##### 1. Initialize a 2D array tower to represent the champagne glasses. The size of this array is determined by query_row + 1 rows, where each row contains i + 1 glasses, and all glasses are initially set to 0.

##### 2. Pour the initial amount of champagne into the topmost glass, which is tower[0][0] = poured.

##### 3. Iterate through each row from the top to the query_row:

- For each glass in the current row, calculate the excess champagne that overflows from it. This is done by subtracting 1 (a full glass) from the current glass's content and dividing it by 2.0.

- If there is excess champagne (excess > 0), distribute it equally to the two glasses in the next row below. Increase the content of the glasses in the next row accordingly (tower[row + 1][glass] += excess and tower[row + 1][glass + 1] += excess).

##### 4. After simulating the pouring process, you'll have the amount of champagne in each glass. To find the amount of champagne in the query_glass of the query_row, simply access tower[query_row][query_glass].

##### 5. Return the minimum of 1.0 and the content of the query_glass in the query_row. This is because the content of a glass cannot exceed 1.0, so if it's more than 1.0, we return 1.0.

---

# Code
```Python3 []
class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        tower = [[0] * (i + 1) for i in range(query_row + 1)]
        tower[0][0] = poured

        for row in range(query_row):
            for glass in range(len(tower[row])):
                excess = (tower[row][glass] - 1) / 2.0
                if excess > 0:
                    tower[row + 1][glass] += excess
                    tower[row + 1][glass + 1] += excess

        return min(1.0, tower[query_row][query_glass])

```
```python []
class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        tower = [[0] * (i + 1) for i in range(query_row + 1)]
        tower[0][0] = poured

        for row in range(query_row):
            for glass in range(len(tower[row])):
                excess = (tower[row][glass] - 1) / 2.0
                if excess > 0:
                    tower[row + 1][glass] += excess
                    tower[row + 1][glass + 1] += excess

        return min(1.0, tower[query_row][query_glass])

```
```C# []
public class Solution {
    public double ChampagneTower(int poured, int query_row, int query_glass) {
        double[][] tower = new double[query_row + 1][];
        for (int i = 0; i <= query_row; i++) {
            tower[i] = new double[i + 1];
        }
        
        tower[0][0] = poured;

        for (int row = 0; row < query_row; row++) {
            for (int glass = 0; glass < tower[row].Length; glass++) {
                double excess = (tower[row][glass] - 1) / 2.0;
                if (excess > 0) {
                    tower[row + 1][glass] += excess;
                    tower[row + 1][glass + 1] += excess;
                }
            }
        }

        return Math.Min(1.0, tower[query_row][query_glass]);
    }
}

```
```C++ []
class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        std::vector<std::vector<double>> tower(query_row + 1, std::vector<double>(query_row + 1, 0.0));
        tower[0][0] = static_cast<double>(poured);

        for (int row = 0; row < query_row; row++) {
            for (int glass = 0; glass <= row; glass++) {
                double excess = (tower[row][glass] - 1.0) / 2.0;
                if (excess > 0) {
                    tower[row + 1][glass] += excess;
                    tower[row + 1][glass + 1] += excess;
                }
            }
        }

        return std::min(1.0, tower[query_row][query_glass]);
    }
};

```
```Java []
public class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        double[][] tower = new double[query_row + 1][query_row + 1];
        tower[0][0] = (double) poured;

        for (int row = 0; row < query_row; row++) {
            for (int glass = 0; glass <= row; glass++) {
                double excess = (tower[row][glass] - 1.0) / 2.0;
                if (excess > 0) {
                    tower[row + 1][glass] += excess;
                    tower[row + 1][glass + 1] += excess;
                }
            }
        }

        return Math.min(1.0, tower[query_row][query_glass]);
    }
}

```
```JavaScript []
var champagneTower = function(poured, query_row, query_glass) {
    const tower = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
    tower[0][0] = poured;

    for (let row = 0; row < query_row; row++) {
        for (let glass = 0; glass <= row; glass++) {
            const excess = (tower[row][glass] - 1) / 2.0;
            if (excess > 0) {
                tower[row + 1][glass] += excess;
                tower[row + 1][glass + 1] += excess;
            }
        }
    }

    return Math.min(1, tower[query_row][query_glass]);
};
```
```C []
double champagneTower(int poured, int query_row, int query_glass) {
    double tower[101][101] = {0};
    tower[0][0] = (double)poured;

    for (int row = 0; row < query_row; row++) {
        for (int glass = 0; glass <= row; glass++) {
            double excess = (tower[row][glass] - 1.0) / 2.0;
            if (excess > 0) {
                tower[row + 1][glass] += excess;
                tower[row + 1][glass + 1] += excess;
            }
        }
    }

    return tower[query_row][query_glass] > 1.0 ? 1.0 : tower[query_row][query_glass];
}
```
