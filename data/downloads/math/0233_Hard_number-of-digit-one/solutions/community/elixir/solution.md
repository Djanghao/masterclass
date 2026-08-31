# Optimized Counting of Digit One in a Range Using Elixir: A Logarithmic Time Complexity Approach

**Author:** dammonburden
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/4096590/](https://leetcode.com/problems/number-of-digit-one/solutions/4096590/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The initial instinct for solving this problem might be to take a brute-force approach: iterate through all the numbers from 1 to n, convert them to strings, and count the occurrences of the digit '1'. However, it's apparent that such an approach would be computationally expensive for large n.
# Approach
<!-- Describe your approach to solving the problem. -->
A more optimized approach is to count the occurrences of the digit '1' mathematically for each decimal place (unit, ten, hundred, etc.). This way, we can calculate the frequency of '1' in each position and sum them up. By using integer division and modulo operations, we can handle each decimal place efficiently. The function performs these calculations iteratively, incrementing the factors by powers of 10 until the factor exceeds n.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

O(log10(n))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
defmodule Solution do
  @spec count_digit_one(n :: integer) :: integer
  def count_digit_one(n) do
count_digit_one(n, 1, 0)
  end

    defp count_digit_one(0, _, acc), do: acc

      defp count_digit_one(n, factor, acc) when n < factor, do: acc

        defp count_digit_one(n, factor, acc) do
            next_factor = factor * 10
                quotient = div(n, next_factor)
                    remainder = rem(n, next_factor)

                        new_acc = acc + quotient * factor
                            new_acc = new_acc + min(max(remainder - factor + 1, 0), factor)

                                count_digit_one(n, next_factor, new_acc)
  end
end
```