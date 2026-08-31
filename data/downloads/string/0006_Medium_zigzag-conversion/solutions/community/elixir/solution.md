# Elixir: Reduce cycles over a struct (beats 100% in time)

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/5769036/](https://leetcode.com/problems/zigzag-conversion/solutions/5769036/)

---

# Intuition
One **zig-zag cycle** can be desribed as a **list of cycles per row**, where each is a list of the **1 or 2 index offsets**, which the row picks **relative to the start index of the cycle**.

The rows can then be built independently by **cycling through the string and collecting the chars for the row**. The total result can be built **efficiently by reducing row, cycles and row cycles into a charlist**.

# Approach
* Compute the cycles for the num of rows. This can be done by for-comprehensions and zipping the indices for the way downwards (zig) and upwards (zag)
* Compose the rows:
  * Turn the string into a tuple for random access efficiency
  * Calculate the cycle lenght of a zig-zag by counting the incides in the given row cycles
  * Reduce the row cycles by prepending the rows to a charlist
  * Reverse the result and turn it into a string
* Prepending a row:
  * Reduce over the cycle starts (begings of a zig-zag)
  * Nested reduce over the indices in the cycle
  * Pick the char at the combined index and prepend it to the accumulator (which is the over all char list)

# Complexity
- Time complexity: **O(n)** (beats 100% of the solutions)
- Space complexity: **O(n)**; a tuple and a list are used as a tradeoff for time efficiency

# Code
```elixir []
defmodule Solution do
  @spec convert(s :: String.t, num_rows :: integer) :: String.t
  def convert(s, rows) when is_binary(s) and is_integer(rows) and rows > 0,
    do:
      row_cycles(rows)
      |> compose_rows(s)

  # the cycles of index-offsets for each row,
  # e.g. defp row_cycles(4), do: [[0], [1, 5], [2, 4], [3]]
  defp row_cycles(rows),
    do: with(
      downwards = for(i <- 0..rows-1, do: [i]),
      upwards = [[] | for(i <- rows..(rows + rows - 2 - 1) // 1, do: [i])] ++ [[]],
      do: Enum.zip_with(downwards, Enum.reverse(upwards), &++/2)
    )

  # reduces the row cycles by prepending the single rows to a char list and turning that into a string
  defp compose_rows(row_cycles =[[_ | _] | _], s),
    do: with(
      chars = s |> String.to_charlist() |> List.to_tuple(),
      cycle_length = row_cycles |> List.flatten() |> Enum.count(),
      reversed_composition = row_cycles |> Enum.reduce([], &prepend_row(chars, &1, cycle_length, &2)),
      do: to_string(Enum.reverse(reversed_composition))
    )

  # prepends the chars of a row by reducing over a base index and its cycle
  defp prepend_row(chars, cycle = [i | _], cycle_length, acc) when is_integer(i) do
    max_index = tuple_size(chars) - 1
    0..max_index // cycle_length
    |> Enum.reduce(acc, fn start_index, acc ->
      cycle
      |> Enum.reduce(acc, fn index_in_cycle, acc ->
          index = start_index + index_in_cycle
          if(index <= max_index, do: [elem(chars, index) | acc], else: acc)
      end)
    end)
  end

end

```