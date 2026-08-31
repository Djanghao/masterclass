# Elixir, O(n)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4595920/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4595920/)

---

# Approach
Create a frequency map for the digits. Iterate from 100 to 998, check if the frequency map has all the digits in the number and if so add the number to the accumulated result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_even_numbers(digits :: [integer]) :: [integer]
  def find_even_numbers(digits), do: do_find_even_numbers(998, Enum.frequencies(digits), [])

  defp do_find_even_numbers(num, freq, acc) when num > 99 do
    digit_1 = rem(num, 10)
    digit_2 = rem(num, 100) |> div(10)
    digit_3 = div(num, 100)
    d1_count = freq[digit_1]
    d2_count = freq[digit_2]
    d3_count = freq[digit_3]
    invalid? = (!d1_count || !d2_count || !d3_count) || (digit_1 == digit_2 && digit_2 == digit_3 && d1_count < 3) ||
    (digit_1 == digit_2 && d1_count < 2) || (digit_2 == digit_3 && d2_count < 2) || (digit_1 == digit_3 && d1_count < 2)
    acc = if invalid?, do: acc, else: [num | acc]
    do_find_even_numbers(num - 2, freq, acc)
  end
  defp do_find_even_numbers(_, _, acc), do: acc
end
```