# Basic Elixir Solution

**Author:** nickshbln
**Votes:** 0
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4976490/](https://leetcode.com/problems/harshad-number/solutions/4976490/)

---

# Complexity
- Time complexity:
 $$O(n)$$


# Code
```
defmodule Solution do
  @spec sum_of_the_digits_of_harshad_number(x :: integer) :: integer
  def sum_of_the_digits_of_harshad_number(x) do
    digits_sum =
      x
      |> Integer.digits()
      |> Enum.sum()

    case rem(x, digits_sum) do
        0 -> digits_sum
        _ -> -1
    end
  end
end
```