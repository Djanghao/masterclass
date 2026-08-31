# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4736444/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4736444/)

---

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec even_odd_bit(n :: integer) :: [integer]
  def even_odd_bit(n), do: do_even_odd_bits(n, 0, 0, 0)

  defp do_even_odd_bits(n, even, odd, i) when n > 0 do
    digit = rem(n, 2)
    cond do
      rem(i, 2) == 0 -> even = if digit == 1, do: even + 1, else: even
                        do_even_odd_bits(div(n, 2), even, odd, i + 1)
      true -> odd = if digit == 1, do: odd + 1, else: odd
              do_even_odd_bits(div(n, 2), even, odd, i + 1)                  
    end
  end
  defp do_even_odd_bits(_, even, odd, _), do: [even, odd]
end
```