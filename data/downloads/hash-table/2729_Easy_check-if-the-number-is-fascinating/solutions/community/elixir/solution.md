# Elixir, set, with construct

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/4761161/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/4761161/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_fascinating(n :: integer) :: boolean
  def is_fascinating(n) do
    with {:ok, set} <- do_is_fascinating(n, MapSet.new),
         {:ok, set} <- do_is_fascinating(n * 2, set),
         {:ok, set} <- do_is_fascinating(n * 3, set) do
         true
    else
      _ -> false
    end
  end

  defp do_is_fascinating(n, set) when n > 0 do
    digit = rem(n, 10)
    digit != 0 && !MapSet.member?(set, digit) && 
    do_is_fascinating(div(n, 10), MapSet.put(set, digit))
  end
  defp do_is_fascinating(_, set), do: {:ok, set}
end
```