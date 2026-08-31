# Elixir, n * (n + 1)/2

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/4746320/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/4746320/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec maximize_sum(nums :: [integer], k :: integer) :: integer
  def maximize_sum(nums, k) do
    max = Enum.max(nums)
    ((2 * max + k - 1) * k) |> div(2)
  end
end
```