# Elixir - Bit by Bit comparison

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5535290/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5535290/)

---

# Approach
Iterate both the numbers bit by bit. Keep a counter for the number of changes required to make n equal to k. Compare the bits of n and k.

# Complexity
- Time complexity:
O(log(max(n, k)))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_changes(n :: integer, k :: integer) :: integer
  def min_changes(n, k), do: do_min_changes(n, k, 0)

  defp do_min_changes(0, 0, res), do: res
  defp do_min_changes(n, k, res) do
    {next_n, cur_n_bit} = {div(n, 2), rem(n, 2)}
    {next_k, cur_k_bit} = {div(k, 2), rem(k, 2)}
    cond do
      cur_n_bit == cur_k_bit -> do_min_changes(next_n, next_k, res)
      cur_n_bit == 1 -> do_min_changes(next_n, next_k, res + 1)
      true -> -1
    end
  end
end
```