# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-gap/solutions/4278840/](https://leetcode.com/problems/binary-gap/solutions/4278840/)

---

# Approach
Uses tail call recursion to extract each digit from the number by dividing continuously by 2 and keeps tract of the 1 bit position indexes to calculate the maximum distance.

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec binary_gap(n :: integer) :: integer
  def binary_gap(n), do: do_binary_gap(n, 0, nil, 0)

  defp do_binary_gap(0, _i, _prev_1_ind, max_dist), do: max_dist
  defp do_binary_gap(n, i, nil, max_dist) do
    prev_1_ind = if rem(n, 2) == 1, do: i, else: nil
    do_binary_gap(div(n,2), i + 1, prev_1_ind, max_dist)
  end
  defp do_binary_gap(n, i, prev_1_ind, max_dist) do
    case rem(n, 2) do
      1 -> do_binary_gap(div(n, 2), i + 1, i, max(i - prev_1_ind, max_dist))
      0 -> do_binary_gap(div(n, 2), i + 1, prev_1_ind, max_dist)
    end
  end
end
```