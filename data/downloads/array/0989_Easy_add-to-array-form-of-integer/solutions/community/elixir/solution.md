# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/4301143/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/4301143/)

---

# Approach
Reverses the num list. Uses tail call recursion to add the digits of nums and k to form the resulting number's digits.

# Complexity
- Time complexity:
O(n + max(n, m)) where n is the length of nums and m is the number of digits in k

- Space complexity:
O(n + max(n, m))

# Code
```
defmodule Solution do
  @spec add_to_array_form(num :: [integer], k :: integer) :: [integer]
  def add_to_array_form(num, k), do: do_add_to_array_form(Enum.reverse(num), k, 0, [])

  defp do_add_to_array_form([], 0, 0, res), do: res
  defp do_add_to_array_form(num, k, c, res) do
    {hd , tl} = if num != [], do: {hd(num), tl(num)}, else: {0, []}
    digit = hd + rem(k, 10) + c
    do_add_to_array_form(tl, div(k, 10), div(digit, 10), [rem(digit,10) | res])
  end 
end
```