# Elixir: DP approach, beats 100% in time and space

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/edit-distance/solutions/5773276/](https://leetcode.com/problems/edit-distance/solutions/5773276/)

---

# Intuition
Dynamic programming approach by filling a table navigating the words

# Approach
Dynamic programming:
* Table structure: 
    * columns reprent the source word, 
    * rows the target word, 
    * cells the minmium edit distance if the words ended there
    * lower-right cell is the overall result
* if the characters in a cell match, we have no edit, we just take the value of the cell diagnonal top-left and have moved forward without cost (-> if both words are equal, that will lead to a diagonal of 0 cells)
* otherwise edit actions are modelled by moving in the table:
    * moving down means an insert: we stay at the position in the source word, but move forward in the target word
    * moving right means delete: we stay at the position in the target word,but move forward in the source word
    * mowing down right means edit: we move forward in both words
    * The solution picks the direction which leads to the minimal value for reaching the current cell

Elixir-specific:
* process dictionary of a spawned task for efficient mutable storage
* turn the strings to tuples for efficient random access on the characters
* use a for-comprehension to fill the table by rows and cols
* The last element in the resulting list is the value of the last cell, so the overall result

# Complexity
- Time complexity: **O(n*m)**; beats 100% of the solution
- Space complexity: **O(n*m)**; for the table; if that should ever be a problem, the rows up row-2 can be deleted, since the algorithm doesnt need the whole table, only the direct previous neighbours of a cell to be calculated

# Code
```elixir []
defmodule Solution do
  @spec min_distance(word1 :: String.t, word2 :: String.t) :: integer
  def min_distance(source, target) when is_binary(source) and is_binary(target),
    do: Task.async(fn -> edit_distance(source, target) end) |> Task.await()

  defp edit_distance("", ""), do: 0
  defp edit_distance("", target), do: String.length(target)
  defp edit_distance(source, ""), do: String.length(source)
  defp edit_distance(source, target),
    do: with(
      rows = List.to_tuple(to_charlist(target)),
      cols = List.to_tuple(to_charlist(source)),
      matrix = for(row <- 0..tuple_size(rows)-1,
                   col <- 0..tuple_size(cols)-1,
                   do: calculate_cell(rows, cols, row, col)),
      do: List.last(matrix)
    )

  # calculates the minimal editing distance to the position in either word
  defp calculate_cell(rows, cols, row, col),
    do:
      if(elem(cols, col) == elem(rows, row), # check match
          do: cell(row-1, col-1), # equal: progress in both words without edit
          else: min(
            cell(row-1, col-1) + 1, # edit in source word, progress in both
            min(
              cell(row-1, col) + 1, # insert: progress in target word
              cell(row, col-1) + 1  # delete: progress in source word
            )))
      |> tap(&Process.put({row, col}, &1))

  defp cell(-1, col), do: col + 1 # edge above the matrix
  defp cell(row, -1), do: row + 1 # edge left of the matrix
  defp cell(row, col), do: Process.get({row, col}, 99999)

end

```