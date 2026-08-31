# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/4255153/](https://leetcode.com/problems/self-dividing-numbers/solutions/4255153/)

---

# Approach
Uses tail call recursion to iterate each number in the range and manually checking if every digit in a number divides the number.

# Complexity
- Time complexity:
O(n * d) where n is the total numbers in the range and d is the average number of digits in a number

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec self_dividing_numbers(left :: integer, right :: integer) :: [integer]
  def self_dividing_numbers(left, right) do
    for num <- left..right, self_dividing?(num, num), do: num
  end

  defp self_dividing?(num, digits) when digits <= 0, do: true
  defp self_dividing?(num, digits) do
    digit = rem(digits, 10)
    digit != 0 && rem(num, digit) == 0 && self_dividing?(num, div(digits, 10))
  end
end
```