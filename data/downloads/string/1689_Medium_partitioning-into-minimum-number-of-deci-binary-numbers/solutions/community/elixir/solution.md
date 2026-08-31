# Elixir One line Solution

**Author:** stackcats
**Votes:** 2
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2202651/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2202651/)

---

```elixir
defmodule Solution do
  @spec min_partitions(n :: String.t) :: integer
  def min_partitions(n) do
    String.graphemes(n) |> Enum.max() |> String.to_integer()
  end
end
```