# Elixir Memoization Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4285424/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4285424/)

---

```
defmodule Solution do
  @spec distribute_candies(n :: integer, limit :: integer) :: integer
  def distribute_candies(n, limit) do
    dp(%{}, 3, n, limit)
    |> elem(1)
  end

  def dp(mem, chidren, candies, limit) do
    cond do
      candies == 0 ->
        {mem, 1}

      chidren == 0 || limit == 0 ->
        {mem, 0}

      Map.has_key?(mem, {chidren, candies, limit}) ->
        {mem, mem[{chidren, candies, limit}]}

      true ->
        0..min(candies, limit)
        |> Enum.reduce({mem, 0}, fn c, {mem, acc} ->
          {new_mem, ct} = dp(mem, chidren - 1, candies - c, limit)
          {new_mem, acc + ct}
        end)
        |> then(fn {mem, ct} ->
          Map.put(mem, {chidren, candies, limit}, ct)
          {mem, ct}
        end)
    end
  end
end

```