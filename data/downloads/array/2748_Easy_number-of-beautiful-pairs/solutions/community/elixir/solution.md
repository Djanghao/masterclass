# Elixir, brute force

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4766446/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4766446/)

---

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_beautiful_pairs(nums :: [integer]) :: integer
  def count_beautiful_pairs(nums) do
    tup = List.to_tuple(nums)
    max_i = tuple_size(tup) - 1
    for i <- 0..max_i-1, j <- 1..max_i, i < j,
        beautiful?(elem(tup, i), elem(tup, j)), reduce: 0 do
      res -> res + 1
    end
  end

  defp beautiful?(n1, n2) do
    Integer.gcd(first_digit(n1), rem(n2, 10)) == 1
  end

  defp first_digit(n) do
    cond do
      n < 10 -> n
      n < 100 -> div(n, 10)
      n < 1000 -> div(n, 100)
      n < 10000 -> div(n, 1000)
    end
  end
end
```