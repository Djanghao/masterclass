# 100% Elixir Approach

**Author:** jowi-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/6008038/](https://leetcode.com/problems/reverse-integer/solutions/6008038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially I wanted to do a string approach. This also worked but for a challenge I went another direction - modulo

# Approach
<!-- Describe your approach to solving the problem. -->
I moved through each digit via a modulo operator and pushed the result into a final output via multiplying by 10 and adding the new digit

finally there is a necessary check to make sure we didn't exceed a 32 bit number

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```elixir []
defmodule Solution do
  @int_max 2147483647
  @int_min -2147483647
  @spec reverse(x :: integer) :: integer
  def reverse(x) do
    x
    |> bitwise_reverse(0)
    |> case do
        x when x >= @int_max -> 0
        x when x <= @int_min -> 0
        x -> x
    end
  end
  # Process each digit
  defp bitwise_reverse(0, output), do: output
  defp bitwise_reverse(num, output) do
    # Extract rightmost digit using modulo
    digit = rem(num, 10)
    new_output = output * 10 + digit
    bitwise_reverse(div(num, 10), new_output)
  end
end
```