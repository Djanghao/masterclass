# Elixir, frequencies

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/4770957/](https://leetcode.com/problems/check-if-array-is-good/solutions/4770957/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec is_good(nums :: [integer]) :: boolean
  def is_good([1, 1]), do: true
  def is_good(nums) do
    freq = Enum.frequencies(nums)
    base = map_size(freq)
    freq[base] == 2 && Enum.all?(1..base - 1, &(freq[&1] == 1))
  end
end
```