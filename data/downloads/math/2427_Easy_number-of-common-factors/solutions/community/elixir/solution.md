# Elixir, brute force

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/4685481/](https://leetcode.com/problems/number-of-common-factors/solutions/4685481/)

---

# Complexity
- Time complexity:
O(min(a, b))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec common_factors(a :: integer, b :: integer) :: integer
  def common_factors(a, b) do
    for x <- 1..min(a, b), rem(a, x) == 0 && rem(b, x) == 0, reduce: 0 do
      acc -> acc + 1
    end
  end
end
```