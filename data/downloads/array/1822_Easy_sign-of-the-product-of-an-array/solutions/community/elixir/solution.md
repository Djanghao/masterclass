# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/4503423/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/4503423/)

---

# Approach
Iterate the numbers and keep of the negative number count. If the list contains zero return zero as result. If the list does not contain zero, return 1 if the negative number count is 0 or even and -1 if the negative number count is odd.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)
# Code
```
defmodule Solution do
  @spec array_sign(nums :: [integer]) :: integer
  def array_sign(nums), do: do_array_sign(nums, 0)

  defp do_array_sign([hd | tl], neg_num_count) when hd != 0 do
    do_array_sign(tl, (if hd < 0, do: neg_num_count + 1, else: neg_num_count))
  end
  defp do_array_sign([0 | _], _), do: 0
  defp do_array_sign([], neg_num_count), do: if rem(neg_num_count, 2) == 0, do: 1, else: -1
end
```