# Solution in PHP with explanation

**Author:** 3B9ACA00
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5383318/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5383318/)

---

# Intuition
The problem requires finding the smallest rectangle that encloses all the '1's in a 2D binary grid. Initially, the idea is to identify the boundaries (minimum and maximum rows and columns) that contain '1's. Once these boundaries are identified, the area of the rectangle can be easily calculated.

# Approach


1. Initialization: Start by initializing variables to track the minimum and maximum row and column indices containing '1's. These are set to extreme values to ensure they get updated correctly on the first encounter of a '1'.
2. Single Pass Through Grid: Iterate over each cell in the grid. If a cell contains a '1', update the min and max row and column indices.
3. Check for No '1's: If no '1's are found (indicated by maxRow or maxCol still being at their initial values), return 0.
4. Calculate Rectangle Dimensions: Compute the height and width of the rectangle using the min and max indices.
Return the Area: Calculate and return the area of the rectangle.



# Complexity
- Time complexity:
The time complexity is O(n\xD7m), where nn is the number of rows and mm is the number of columns. This is because we need to inspect each cell in the grid exactly once.

- Space complexity:
The space complexity is O(1) since we only use a fixed amount of additional space regardless of the input size.

# Code
```
class Solution
{
    /**
     * @param array $grid - 2D binary array
     * @return int - Minimum possible area of the rectangle that contains all 1's
     */
    public function minArea(array $grid): int
    {
        $rows = count($grid);
        if ($rows === 0) return 0;
        $cols = count($grid[0]);
        if ($cols === 0) return 0;

        // Initialize variables to track the min and max row and column indices containing '1'
        $minRow = $rows;
        $maxRow = -1;
        $minCol = $cols;
        $maxCol = -1;

        // Single pass through the grid to find the extreme coordinates of '1's
        for ($r = 0; $r < $rows; $r++) {
            for ($c = 0; $c < $cols; $c++) {
                if ($grid[$r][$c] === 1) {
                    $minRow = min($minRow, $r);
                    $maxRow = max($maxRow, $r);
                    $minCol = min($minCol, $c);
                    $maxCol = max($maxCol, $c);
                }
            }
        }

        // If no '1's were found, return 0
        if ($maxRow === -1 || $maxCol === -1) return 0;

        // Calculate the height and width of the rectangle
        $height = $maxRow - $minRow + 1;
        $width = $maxCol - $minCol + 1;

        // Return the area of the rectangle
        return $height * $width;
    }
}


$solution = new Solution();

$testCases = [
    [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1],
    [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], 9],
    [[[1, 1, 0], [0, 1, 0], [0, 0, 0]], 4],
    [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], 0],
    [[[1, 1], [1, 1]], 4]
];

foreach ($testCases as $testCase) {
    [$grid, $expected] = $testCase;
    $result = $solution->minArea($grid);
    echo "Test with grid = " . json_encode($grid) . "\
";
    echo "Expected: $expected, got: $result\
";
    echo ($result === $expected) ? "PASS\
" : "FAIL\
";
    echo "\
";
}
```