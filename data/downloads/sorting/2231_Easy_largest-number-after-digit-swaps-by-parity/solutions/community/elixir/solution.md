# Elixir, O(log(n))

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4633049/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/4633049/)

---

# Approach
Iterate the number to extract digit count and parity array where odd number digit positions have 1 as value and even number digit positions has 0 as value.
12342 -> %{1 => 1, 2 => 2, 3 => 1, 4 => 1}
parity -> [1,0,1,0,0]

Iterate the parity get the maximum digit available for the parity in the digit count map and accumulate the resulting number.

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(log(n))

# Code
```
defmodule Solution do
  @spec largest_integer(num :: integer) :: integer
  def largest_integer(num) do
    {parity, digit_count} = get_parity_digit_count(num, [], Map.new(0..9, &{&1, 0}))
    for x <- parity, reduce: {digit_count, 0} do
      {digit_count, acc} -> {max_digit, digit_count} = get_parity_max_digit(digit_count, x)
                            {digit_count, acc * 10 + max_digit}
    end |> elem(1)
  end

  defp get_parity_max_digit(digit_count, parity) do
    try do
      for x <- 9..0, rem(x, 2) == parity, count = digit_count[x],
          count > 0, do: throw({x, Map.update(digit_count, x, 0, &(&1 - 1))})
    catch
        res -> res
    end
  end

  defp get_parity_digit_count(num, parity, digit_count) when num > 0 do
    digit = rem(num, 10)
    get_parity_digit_count(div(num, 10), [rem(digit, 2) | parity], Map.update(digit_count, digit, 1, &(&1 + 1)))
  end
  defp get_parity_digit_count(_, parity, digit_count), do: {parity, digit_count}
end
```