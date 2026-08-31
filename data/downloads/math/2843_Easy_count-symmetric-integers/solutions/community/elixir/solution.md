# Elixir, no string/list conversion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/4783810/](https://leetcode.com/problems/count-symmetric-integers/solutions/4783810/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_symmetric_integers(low :: integer, high :: integer) :: integer
  def count_symmetric_integers(low, high) do
    for x <- low..high, n_d = digits(x), rem(n_d, 2) == 0, reduce: 0 do
      acc ->
        separator = 10 ** div(n_d, 2)
        first_half = div(x, separator)
        second_half = rem(x, separator)
        if sum_digits(first_half, 0) == sum_digits(second_half, 0), do: acc + 1, else: acc
    end   
  end

  defp sum_digits(n, acc) when n > 0, do: sum_digits(div(n, 10), acc + rem(n, 10))
  defp sum_digits(_, acc), do: acc

  defp digits(n) do
    cond do
      n < 10 -> 1
      n < 100 -> 2
      n < 1000 -> 3
      n < 10000 -> 4 
      true -> 5 
    end
  end
end
```