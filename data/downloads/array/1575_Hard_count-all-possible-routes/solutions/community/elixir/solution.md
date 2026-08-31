# Elixir - Memoization

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3679754/](https://leetcode.com/problems/count-all-possible-routes/solutions/3679754/)

---

# Intuition
Well, it's not that difficult to come to the brute-force solution. Then adding memoization is just a piece of cake. Because Erlang/Elixir's data structures are all immutable, which is not good for dynamic programming, I just use process dictionary as the memo.

# Code
```
defmodule Solution do
  @spec count_routes(locations, start, finish, fuel) :: pos_integer
        when locations: [pos_integer],
             start: non_neg_integer,
             finish: non_neg_integer,
             fuel: pos_integer
  def count_routes(locations, start, finish, fuel) do
    fuel_consumption_map = to_fuel_consumption_map(locations)

    Task.async(fn ->
      do_count_routes(fuel_consumption_map, start, finish, fuel)
    end)
    |> Task.await()
  end

  @spec to_fuel_consumption_map([fuel]) ::
    %{from_city => [{to_city, consumption}]}
    when fuel: pos_integer(),
         from_city: non_neg_integer(),
         to_city: non_neg_integer(),
         consumption: pos_integer()
  defp to_fuel_consumption_map(locations) do
    for {n, i} <- Stream.with_index(locations), into: %{} do
      for {m, j} <- Stream.with_index(locations), j != i do
        {j, abs(n - m)}
      end
      |> then(&{i, &1})
    end
  end

  @spec do_count_routes(fuel_consumption_map, start, finish, fuel) :: pos_integer
        when fuel_consumption_map: %{from_city => [{to_city, consumption}]},
             from_city: non_neg_integer(),
             to_city: non_neg_integer(),
             consumption: pos_integer(),
             start: non_neg_integer(),
             finish: non_neg_integer(),
             fuel: integer()
  defp do_count_routes(_, _, _, fuel) when fuel < 0, do: 0

  defp do_count_routes(fuel_consumption_map, start, finish, fuel) do
    memoized({start, fuel}, fn ->      
      fuel_consumption_map[start]
      |> Enum.map(fn {next, consumption} ->
        do_count_routes(fuel_consumption_map, next, finish, fuel - consumption)
      end)
      |> Enum.sum()
      |> then(& start == finish && &1 + 1 || &1)
      |> rem(1_000_000_007)
    end)
  end

  @spec memoized(key, (-> value)) :: value
        when key: term(),
             value: term()
  defp memoized(key, fun) do
    with nil <- Process.get(key) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```