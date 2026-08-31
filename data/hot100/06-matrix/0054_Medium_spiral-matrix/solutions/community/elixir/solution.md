# Surpisingly Simple Elixir solution

**Author:** drdec
**Votes:** 5
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/3256917/](https://leetcode.com/problems/spiral-matrix/solutions/3256917/)

---

# Intuition

Given that we are working with linked lists in elixir and not arrays I thought at first this would be a nightmare.  But then I realized that the process was to take the first row and then recurse on the remaining entries but rotated counterclockwise 90 degrees.

And it turns out it is not difficult to rotate a list of lists in elixir using the standard library tools.

# Code
```
defmodule Solution do
  @spec spiral_order(matrix :: [[integer]]) :: [integer]
  def spiral_order([row]), do: row

  def spiral_order([row | tail]) do
    rotated =
      tail
      |> Enum.zip()
      |> Enum.reverse()
      |> Enum.map(&Tuple.to_list/1)

    row ++ spiral_order(rotated)
  end
end

```