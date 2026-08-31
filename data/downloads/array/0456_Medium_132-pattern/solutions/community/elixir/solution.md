# Elixir Mono Decrease Stack Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/132-pattern/solutions/2016655/](https://leetcode.com/problems/132-pattern/solutions/2016655/)

---

```elixir
defmodule Solution do
  @spec find132pattern(nums :: [integer]) :: boolean
  def find132pattern([n | ns]) do
    ns
    |> Enum.reduce_while({[], n}, fn n, {st, cur_min} ->
      st = Enum.drop_while(st, fn {m, _} -> m <= n end)

      cond do
        st == [] -> {:cont, {[{n, cur_min} | st], min(cur_min, n)}}
        st |> hd() |> elem(1) < n -> {:halt, :ok}
        true -> {:cont, {[{n, cur_min} | st], min(cur_min, n)}}
      end
    end)
    |> then(&(&1 == :ok))
  end
end
```