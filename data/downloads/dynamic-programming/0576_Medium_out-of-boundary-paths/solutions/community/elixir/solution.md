# Elixir - Recursive Memoization with Map

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4627518/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4627518/)

---

# Solution

Memoization using a map, passing through the recursion.

It is faster than storing it in an Agent or GenServer or in the Process.
But code is less pretty.


# Code
```
defmodule Solution do
  @spec find_paths(m :: integer, n :: integer, max_move :: integer, start_row :: integer, start_column :: integer) :: integer
  def find_paths(m, n, max_move, start_row, start_column) do
    {_memo, count} = rec(%{}, max_move, {start_row, start_column}, m, n)

    rem(count, 1_000_000_007)
  end

  defp rec(memo, _move, {x, y}, m, n) when x < 0 or x >= m or y < 0 or y >= n,
    do: {memo, 1}

  defp rec(memo, 0, _, _, _), do: {memo, 0}

  defp rec(memo, move, {x, y}, m, n) do
    case Map.get(memo, {x, y, move}) do
      nil ->
        {memo, l_count} = rec(memo, move - 1, {x - 1, y}, m, n)
        {memo, r_count} = rec(memo, move - 1, {x + 1, y}, m, n)
        {memo, d_count} = rec(memo, move - 1, {x, y - 1}, m, n)
        {memo, u_count} = rec(memo, move - 1, {x, y + 1}, m, n)
        rec_count = l_count + r_count + d_count + u_count

        memo = Map.put(memo, {x, y, move}, rec_count)
        {memo, rec_count}

      memoed ->
        {memo, memoed}
    end
  end
end
```