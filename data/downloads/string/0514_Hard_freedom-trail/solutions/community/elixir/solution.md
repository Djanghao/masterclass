# Elixir - DP - Recursion - Memoization

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5081515/](https://leetcode.com/problems/freedom-trail/solutions/5081515/)

---



# Code
```
defmodule Solution do
  @spec find_rotate_steps(ring :: String.t, key :: String.t) :: integer
  def find_rotate_steps(ring, key) do
    ring = ring |> String.to_charlist() |> Enum.with_index()
    l = length(ring)
    key = String.to_charlist(key)
    Task.async(fn ->
      rotate(0, ring, l, key) + length(key)
    end)
    |> Task.await(:infinity)
  end

  defp rotate(_curr, _ring, _l, []), do: 0
  defp rotate(curr, ring, l, [c | t_key] = k) do
    case Process.get({curr, k}) do
      nil -> 
        ring |> Enum.reduce(nil, fn {r, i}, min ->
          if r == c do
            min_steps = min_steps(curr, i, l)
            min_steps + rotate(i, ring, l, t_key)
          end |> min(min)
        end)
        |> tap(&Process.put({curr, k}, &1))
      memoized -> memoized
    end
  end

  defp min_steps(curr, i, l) do
    min(abs(curr - i), abs(l - abs(curr - i)))
  end
end
```