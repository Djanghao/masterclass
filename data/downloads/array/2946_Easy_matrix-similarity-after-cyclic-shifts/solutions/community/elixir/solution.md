# Elixir solution use Enum.reduce_while().

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4354638/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4354638/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 307ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.35MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec are_similar(mat :: [[integer]], k :: integer) :: boolean
  def are_similar(mat, k) do
    n = Enum.at(mat, 0) |> Enum.count()
    Enum.reduce_while(mat, true, fn row, _ ->
      res =
        Enum.reduce_while(0..n-1, row, fn i, _ ->
          if Enum.at(row, i) != Enum.at(row, rem(i + k, n)) do
            {:halt, false}
          else
            {:cont, true}
          end
        end)
      if not res do
        {:halt, res}
      else
        {:cont, res}
      end
    end)
  end
end

```