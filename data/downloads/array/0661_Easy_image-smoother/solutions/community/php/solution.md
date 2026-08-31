# ✅96.31%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 74
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4423065/](https://leetcode.com/problems/image-smoother/solutions/4423065/)

---

# Problem Explanation: \uD83E\uDDAF

##### The problem involves smoothing a given grayscale image using a 3x3 filter. The filter is applied to each cell in the image, and the value of each cell is updated based on the average of the cell and its eight surrounding cells. The average is rounded down to the nearest integer.
---

# Solution: \uD83D\uDE80

## 1. Approach:
- ##### Iterate through each cell in the image.
- ##### For each cell, calculate the sum of the cell and its eight surrounding cells.
- ##### Divide the sum by the number of valid surrounding cells.
- ##### Update the value of the current cell with the floor of the average.

## 2. How the Solution Works:

- ##### Iterate through each cell in the image using nested loops.
- ##### For each cell at position `(i, j)`, calculate the sum of the values of the cell and its eight surrounding cells.
- ##### Keep track of the number of valid surrounding cells (taking care not to go out of bounds).
- ##### Calculate the average by dividing the sum by the number of valid surrounding cells.
- ##### Update the value of the current cell with the floor of the average.
---
# Code

```python []
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        rows, cols = len(img), len(img[0])
        result = [[0] * cols for _ in range(rows)]

        for i in range(rows):
            for j in range(cols):
                total_sum = 0
                count = 0

                for x in range(max(0, i-1), min(rows, i+2)):
                    for y in range(max(0, j-1), min(cols, j+2)):
                        total_sum += img[x][y]
                        count += 1

                result[i][j] = total_sum // count

        return result
```
```C++ []
class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {
        int rows = img.size();
        int cols = img[0].size();
        std::vector<std::vector<int>> result(rows, std::vector<int>(cols, 0));

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                int total_sum = 0;
                int count = 0;

                for (int x = std::max(0, i-1); x < std::min(rows, i+2); ++x) {
                    for (int y = std::max(0, j-1); y < std::min(cols, j+2); ++y) {
                        total_sum += img[x][y];
                        count += 1;
                    }
                }

                result[i][j] = total_sum / count;
            }
        }

        return result;
    }
};
```
```javascript []
var imageSmoother = function(img) {
    const rows = img.length;
    const cols = img[0].length;
    const result = new Array(rows);

    for (let i = 0; i < rows; ++i) {
        result[i] = new Array(cols);

        for (let j = 0; j < cols; ++j) {
            let totalSum = 0;
            let count = 0;

            for (let x = Math.max(0, i - 1); x < Math.min(rows, i + 2); ++x) {
                for (let y = Math.max(0, j - 1); y < Math.min(cols, j + 2); ++y) {
                    totalSum += img[x][y];
                    count += 1;
                }
            }

            result[i][j] = Math.floor(totalSum / count);
        }
    }

    return result;
};

```
```java []
class Solution {
    public int[][] imageSmoother(int[][] img) {
        int rows = img.length;
        int cols = img[0].length;
        int[][] result = new int[rows][cols];

        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                int totalSum = 0;
                int count = 0;

                for (int x = Math.max(0, i-1); x < Math.min(rows, i+2); ++x) {
                    for (int y = Math.max(0, j-1); y < Math.min(cols, j+2); ++y) {
                        totalSum += img[x][y];
                        count += 1;
                    }
                }

                result[i][j] = totalSum / count;
            }
        }

        return result;
    }
}

```
```C# []
public class Solution {
    public int[][] ImageSmoother(int[][] img) {
        int rows = img.Length;
        int cols = img[0].Length;
        int[][] result = new int[rows][];

        for (int i = 0; i < rows; ++i) {
            result[i] = new int[cols];

            for (int j = 0; j < cols; ++j) {
                int totalSum = 0;
                int count = 0;

                for (int x = Math.Max(0, i - 1); x < Math.Min(rows, i + 2); ++x) {
                    for (int y = Math.Max(0, j - 1); y < Math.Min(cols, j + 2); ++y) {
                        totalSum += img[x][y];
                        count += 1;
                    }
                }

                result[i][j] = totalSum / count;
            }
        }

        return result;
    }
}
```
```PHP []
class Solution {
    function imageSmoother($img) {
        $rows = count($img);
        $cols = count($img[0]);
        $result = [];

        for ($i = 0; $i < $rows; ++$i) {
            $result[$i] = [];

            for ($j = 0; $j < $cols; ++$j) {
                $totalSum = 0;
                $count = 0;

                for ($x = max(0, $i - 1); $x < min($rows, $i + 2); ++$x) {
                    for ($y = max(0, $j - 1); $y < min($cols, $j + 2); ++$y) {
                        $totalSum += $img[$x][$y];
                        $count += 1;
                    }
                }

                $result[$i][$j] = intval($totalSum / $count);
            }
        }

        return $result;
    }
}

```
---
# Time Complexity: \u23F2\uFE0F
##### The nested loops iterate through each cell in the original image, resulting in a time complexity of $$O(m * n)$$, where `m` is the number of rows and `n` is the number of columns.

# Space Complexity: \uD83D\uDEF0\uFE0F
##### The additional space used is for the `result` matrix, which has the same dimensions as the input image. Therefore, the space complexity is $$O(m * n)$$, where `m` is the number of rows and `n` is the number of columns.
---
![Screenshot 2023-08-20 065922.png](./images/0.png)













