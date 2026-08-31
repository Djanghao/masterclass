# Elixir my solution use Enum.reduce().

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3479096/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3479096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 619ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 68.9MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_sum(grid :: [[integer]]) :: integer
  def max_sum(grid) do
    len_row = Enum.count(grid)
    len_col = Enum.count(Enum.at(grid, 0))
    Enum.reduce(grid, {nil, 0, 0}, fn row, {_, i, res} ->
      if i < len_row - 2 do
        {:cont, i + 1, max(res,
        Enum.reduce(row, {nil, 0, res}, fn _, {_, j, res} ->
          if j < len_col - 2 do
            {:cont, j + 1, max(res,
                  Enum.at(Enum.at(grid, i), j) + Enum.at(Enum.at(grid, i), j + 1) + Enum.at(Enum.at(grid, i), j + 2) \\
                + Enum.at(Enum.at(grid, i + 1), j + 1) \\
                + Enum.at(Enum.at(grid, i + 2), j) + Enum.at(Enum.at(grid, i + 2), j + 1) + Enum.at(Enum.at(grid, i + 2), j + 2)
              )
            }
          else
            {:halt, j + 1, res}
          end
        end)) |> elem(2)
        }
      else
        {:halt, i + 1, res}
      end
    end) |> elem(2)
  end
end

```