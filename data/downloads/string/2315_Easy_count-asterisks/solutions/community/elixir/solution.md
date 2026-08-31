# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/4657623/](https://leetcode.com/problems/count-asterisks/solutions/4657623/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_asterisks(s :: String.t) :: integer
  def count_asterisks(s) do
    for <<x <- s>>, x < ?a or x > ?z, reduce: {0, 0} do
      {pipe_count, res} -> cond do
        x == ?| -> {pipe_count + 1, res}
        true -> if rem(pipe_count, 2) == 0,
                do: {pipe_count, res + 1}, else: {pipe_count, res}
      end
    end |> elem(1)
  end
end
```