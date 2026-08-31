# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/4695906/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/4695906/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec apply_operations(nums :: [integer]) :: [integer]
  def apply_operations(nums), do: do_apply_ops(nums, [], 0)

  defp do_apply_ops([n1, n2 | tl], acc, zero_count) do
    cond do
      n1 == 0 -> do_apply_ops([n2 | tl], acc, zero_count + 1)
      n1 == n2 -> do_apply_ops(tl, [n1 * 2 | acc], zero_count + 1)
      true -> do_apply_ops([n2 | tl], [n1 | acc], zero_count)
    end
  end
  defp do_apply_ops([n], acc, zero_count), do: do_apply_ops([], [n | acc], zero_count)
  defp do_apply_ops(_, acc, zero_count) do
    cond do
      zero_count == 0 ->  Enum.reverse(acc)
      true -> for x <- 1..zero_count, reduce: acc do
                acc -> [0 | acc]
              end |> Enum.reverse
    end
  end
end
```