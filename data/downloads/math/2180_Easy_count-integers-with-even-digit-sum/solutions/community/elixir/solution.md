# Elixir, O(log(n))

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4622399/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4622399/)

---

# Approach
Find the quotient and remainder of num/2. If the remainder is 1, return the quotient. Else if sum of digits of num is divisible by 2, return quotient. Else return quotient - 1.

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_even(num :: integer) :: integer
  def count_even(num) do
    quotient = div(num, 2)
    rem = rem(num, 2)
    cond do
      rem == 1 || (Integer.digits(num) |> Enum.sum |> rem(2)) == 0 -> quotient
      true -> quotient - 1
    end
  end
end
```