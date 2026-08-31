# Elixir solution

**Author:** Fubuchi
**Votes:** 0
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2627336/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2627336/)

---

Separate input to `equals` and `diffs` list contain pairs `{x, y}`

Try to sort the `equals` list in a way that for each `{xi, yi}` pair, there is always a pair `{xj, yj}` that `j < i and (xi == xj or yi == yj`

Build a values map from `equals` then check if all pair in `diffs` satisfy the table.

```
defmodule Solution do
  def equations_possible(equations) do
    equations
    |> Enum.reduce_while({[], []}, fn
      <<x, "!=", x>>, _ ->
        {:halt, false}

      <<x, "==", x>>, acc ->
        {:cont, acc}

      <<x::binary-size(1), "==", y::binary-size(1)>>, {equals, diffs} ->
        {:cont, {[{x, y} | equals], diffs}}

      <<x::binary-size(1), "!=", y::binary-size(1)>>, {equals, diffs} ->
        {:cont, {equals, [{x, y} | diffs]}}
    end)
    |> then(&if &1 == false, do: false, else: compute(&1))
  end

  defp sort_equals([], _used, [], result), do: Enum.reverse(result)

  defp sort_equals([], used, [{x, y} | rest] = remain, result) do
    remain
    |> Enum.reduce({result, used, [], :try_add}, fn
      {x, y}, {result, used, remain, :added} ->
        {result, used, [{x, y} | remain], :added}

      {x, y}, {result, used, remain, :try_add} ->
        if MapSet.member?(used, x) or MapSet.member?(used, y) do
          {[{x, y} | result], MapSet.put(used, x) |> MapSet.put(y), remain, :added}
        else
          {result, used, [{x, y} | remain], :try_add}
        end
    end)
    |> then(fn
      {result, used, remain, :added} ->
        sort_equals(remain, used, [], result)

      {result, used, _, _} ->
        sort_equals(rest, MapSet.put(used, x) |> MapSet.put(y), [], [{x, y} | result])
    end)
  end

  defp sort_equals([{x, y} | rest] = ip, used, remain, result) do
    if MapSet.size(used) == 0 do
      sort_equals(rest, MapSet.new([x, y]), remain, [{x, y} | result])
    else
      if MapSet.member?(used, x) or MapSet.member?(used, y) do
        sort_equals(rest, MapSet.put(used, x) |> MapSet.put(y), remain, [
          {x, y} | result
        ])
      else
        sort_equals(rest, used, [{x, y} | remain], result)
      end
    end
  end

  defp compute({equals, diffs}) do
    equals
    |> sort_equals(MapSet.new(), [], [])
    |> Enum.reduce({%{}, 0}, fn {x, y}, {values, seed} = acc ->
      case {Map.get(values, x), Map.get(values, y)} do
        {nil, nil} -> {Map.put(values, x, seed) |> Map.put(y, seed), seed + 1}
        {v, nil} -> {Map.put(values, y, v), seed}
        {nil, v} -> {Map.put(values, x, v), seed}
        {v, v} -> acc
      end
    end)
    |> then(fn {values, _} ->
      Enum.all?(diffs, fn {x, y} ->
        case {Map.get(values, x), Map.get(values, y)} do
          {nil, nil} -> true
          {v, v} -> false
          _ -> true
        end
      end)
    end)
  end
end
```