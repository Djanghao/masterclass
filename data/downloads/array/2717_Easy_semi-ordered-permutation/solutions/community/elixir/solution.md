# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/4761053/](https://leetcode.com/problems/semi-ordered-permutation/solutions/4761053/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec semi_ordered_permutation(nums :: [integer]) :: integer
  def semi_ordered_permutation(nums) do
    for x <- nums, reduce: {0, 0, 0, 0} do
      {i, i_1, i_n, n} -> cond do
        x == 1 -> {i + 1, i, i_n, n}
        x > n -> {i + 1, i_1, i, x}
        true ->  {i + 1, i_1, i_n, n}
      end
    end |> then(fn {len, i_1, i_n, _} -> i_1 + (len - 1 - i_n) - (if i_1 > i_n, do: 1, else: 0) end)
  end
end
```