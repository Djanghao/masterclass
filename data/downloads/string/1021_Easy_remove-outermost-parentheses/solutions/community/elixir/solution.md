# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/4308549/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/4308549/)

---

# Approach
Uses binary pattern matching and tail call recursion to read the characters one by one and keep count of the opening braces. Construct the result based on the opening braces count and the current character.

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec remove_outer_parentheses(s :: String.t) :: String.t
  def remove_outer_parentheses(s), do: do_remove_outer_parantheses(s, 0, <<>>)

  defp do_remove_outer_parantheses(<<>>, _, res), do: res
  defp do_remove_outer_parantheses(<<?(, rest::bytes>>, open_count, res) do 
    if open_count == 0, do: do_remove_outer_parantheses(rest, 1, res), else: do_remove_outer_parantheses(rest, open_count + 1, <<res::bytes, ?(>>)
  end
  defp do_remove_outer_parantheses(<<_ , rest::bytes>>, open_count, res) do
    if open_count == 1, do: do_remove_outer_parantheses(rest, 0, res), else: do_remove_outer_parantheses(rest, open_count - 1, <<res::bytes, ?)>>)
  end
end
```