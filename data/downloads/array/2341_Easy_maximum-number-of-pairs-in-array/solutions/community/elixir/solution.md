# Elixir, frequencies

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/4663944/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/4663944/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec number_of_pairs(nums :: [integer]) :: [integer]
  def number_of_pairs(nums) do
    freq = Enum.frequencies(nums)
    for {_, v} <- freq, reduce: [0, 0] do
      [pairs, leftovers] -> [pairs + div(v, 2), leftovers + rem(v,2)]
    end
  end
end
```