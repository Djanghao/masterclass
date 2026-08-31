# Elixir dynamic programming solution

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3347642/](https://leetcode.com/problems/minimum-path-sum/solutions/3347642/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since only downward and rightward motion is allowed, this problem can be solved in a single pass using dynamic programming. To get to the cell `{i, j}` we must either come from the cell above (moving down from it) or from the cell to the left (moving right from it). So, for each cell, the minimum path sum to get to that cell is equal to its value **plus** the minimum value between the value of the cell above it and the cell to the left. 

For cells of the first row there are no cells above, so we just add value of the cell to the left. Similarly, for the cells of the first column, there are no cells to the left, so just add value of the cell above it. The very first element `{0, 0}` remains unchanged since it has no cells neither to the left nor above it.

The last element `{m - 1, n - 1}` will be our answer after all the calculations are performed.

# Approach
<!-- Describe your approach to solving the problem. -->
To process each row, we only need previous row, so we won't store a full 2d list with minimal path sum calculated for every cell. For each row from `grid`, start with left cell value equal to the sum of the first elements of that and previous rows. Traverse the row and collect new values. 

I'm collecting new values in reverse order to easely access previous/left value and also avoid unnecessary list copying. After all the values from the row are processed, the new row now can be reversed back and returned.

To avoid processing the first row separately, I just added a dummy row with maximum possible value (the problem constraints say that the maximum value of `n`, which is the number of elements in each row, is 200 and maximum cell value is 100, so `200 * 100 = 20000`). The first element is set to `0`, since we need to add it to the first element of the next row.

After all rows are processed, just return last value of the last row.

# Code
```
defmodule Solution do
    @spec min_path_sum(grid :: [[integer]]) :: integer
    def min_path_sum(grid) do
        traverse(grid, [0 | List.duplicate(20000, 199)])
    end

    defp traverse([], prev_row), do: Enum.at(prev_row, -1)
    defp traverse([[first | row] | rows], [prev_row_head | prev_row]) do
        prev_row = traverse_row(row, prev_row, [first + prev_row_head])
        traverse(rows, prev_row)
    end

    defp traverse_row([], _prev_row, acc), do: Enum.reverse(acc)
    defp traverse_row([head | tail], [top | prev_row], [prev | _rest] = acc) do
        traverse_row(tail, prev_row, [head + min(prev, top) | acc])
    end
end
```
Please consider upwoting if you find my solution helpful!