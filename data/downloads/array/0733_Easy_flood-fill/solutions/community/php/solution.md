# Beats 97.76% in Python3 (Recursive DFS)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/flood-fill/solutions/5479186/](https://leetcode.com/problems/flood-fill/solutions/5479186/)

---

# Approach
The approach of this solution is a classic recursive depth-first search (DFS) algorithm for the flood fill problem. 

- The function takes an image represented as a 2D list of integers, a starting row sr and column sc, and a color color to fill. 
- It recursively explores neighboring cells of the starting point and changes their color to the new specified color while respecting the boundaries and the target color to fill.

# Complexity
- Time complexity:
$$O(rows * cols)$$, where rows is the number of rows in the image and cols is the number of columns. This is because the dfs function is called at most once per cell in the image, and each call to dfs explores at most four neighboring cells.

- Space complexity:
$$O(rows * cols)$$ as the function uses a recursive stack to keep track of the cells to explore. This is because the stack size is proportional to the number of cells to explore, which is at most the number of cells in the image.

# Code
``` python3 []
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        rows, cols = len(image), len(image[0])
        target_color = image[sr][sc]

        # If the target color is the same as the given color, return the original image
        if target_color == color:
            return image

        def dfs(row: int, col: int):
            if image[row][col] == target_color:
                image[row][col] = color
                if row >= 1:
                    dfs(row - 1, col)
                if row + 1 < rows:
                    dfs(row + 1, col)
                if col >= 1:
                    dfs(row, col - 1)
                if col + 1 < cols:
                    dfs(row, col + 1)

        # Call the helper function to start the flood fill
        dfs(sr, sc)
        return image
```
``` javascript []
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    const targetColor = image[sr][sc];

    // If the target color is the same as the given color, return the original image
    if (targetColor === color) {
        return image;
    }

    function dfs(row, col) {
        if (image[row][col] === targetColor) {
            image[row][col] = color;
            if (row > 0) {
                dfs(row - 1, col);
            }
            if (row < rows - 1) {
                dfs(row + 1, col);
            }
            if (col > 0) {
                dfs(row, col - 1);
            }
            if (col < cols - 1) {
                dfs(row, col + 1);
            }
        }
    }

    // Call the helper function to start the flood fill
    dfs(sr, sc);
    return image;
};
```
``` php []
class Solution {

    /**
     * @param Integer[][] $image
     * @param Integer $sr
     * @param Integer $sc
     * @param Integer $color
     * @return Integer[][]
     */
    function floodFill($image, $sr, $sc, $color) {
        $rows = count($image);
        $cols = count($image[0]);
        $target_color = $image[$sr][$sc];

        // If the target color is the same as the given color, return the original image
        if ($target_color == $color) {
            return $image;
        }

        $dfs = function(int $row, int $col) use (&$image, $target_color, $color, $rows, $cols, &$dfs) {
            if ($image[$row][$col] == $target_color) {
                $image[$row][$col] = $color;
                if ($row >= 1) {
                    $dfs($row - 1, $col);
                }
                if ($row + 1 < $rows) {
                    $dfs($row + 1, $col);
                }
                if ($col >= 1) {
                    $dfs($row, $col - 1);
                }
                if ($col + 1 < $cols) {
                    $dfs($row, $col + 1);
                }
            }
        };

        // Call the helper function to start the flood fill
        $dfs($sr, $sc);
        return $image;
    }
}
```