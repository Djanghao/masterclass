# Elixir DP Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/2065352/](https://leetcode.com/problems/ones-and-zeroes/solutions/2065352/)

---

```elixir
defmodule Solution do
  @spec find_max_form(strs :: [String.t()], m :: integer, n :: integer) :: integer
  def find_max_form(strs, m, n) do
    for s <- strs, reduce: %{} do
      dp ->
        {ones, zeros} = ones_and_zeros(s)

        for i <- m..zeros//-1, j <- n..ones//-1, reduce: dp do
          dp -> Map.put(dp, {i, j}, max(Map.get(dp, {i, j}, 0), 1 + Map.get(dp, {i - zeros, j - ones}, 0)))
        end
    end
    |> Map.get({m, n}, 0)
  end

  def ones_and_zeros(s) do
    s
    |> String.graphemes()
    |> Enum.reduce({0, 0}, fn c, {ones, zeros} ->
      if c == "1" do
        {ones + 1, zeros}
      else
        {ones, zeros + 1}
      end
    end)
  end
end
```