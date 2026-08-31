# [Elixir] || Tail-Recursion || Sorting

**Author:** KettelBear
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4319104/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4319104/)

---

# Intuition

We are told that the slice can be rearranged into any order to make it arithmetic, so we'll sort the slice to inspect.

# Complexity
- Time complexity: $$O(m * n * log(n))$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec check_arithmetic_subarrays(nums :: [integer], l :: [integer], r :: [integer]) :: [boolean]
  def check_arithmetic_subarrays(_, [], []), do: []
  def check_arithmetic_subarrays(nums, [l | rest], [r | tail]) do
    valid? = nums |> Enum.slice(l..r) |> Enum.sort() |> arithmetic?()

    [valid? | check_arithmetic_subarrays(nums, rest, tail)]
  end

  defp arithmetic?([one, two | rest]), do: arithmetic?([two | rest], two - one)
  defp arithmetic?(_), do: true

  defp arithmetic?([one, two | rest], diff) do
    if two - one != diff, do: false, else: arithmetic?([two | rest], diff)
  end
  defp arithmetic?(_, _), do: true
end
```