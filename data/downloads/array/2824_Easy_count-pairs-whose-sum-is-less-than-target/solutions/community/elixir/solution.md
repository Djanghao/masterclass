# Elixir, uses sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4779268/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/4779268/)

---

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_pairs(nums :: [integer], target :: integer) :: integer
  def count_pairs(nums, target) do
    tup = Enum.sort(nums) |> List.to_tuple
    do_count_pairs(tup, target, 0, tuple_size(tup) - 1, 0)
  end

  defp do_count_pairs(tuple, tgt, i, j, res) when i < j do
    if elem(tuple, i) + elem(tuple, j) < tgt,
    do: do_count_pairs(tuple, tgt, i + 1, j, res + (j - i)),
    else: do_count_pairs(tuple, tgt, i, j - 1, res)
  end
  defp do_count_pairs(_, _, _, _, res), do: res
end
```