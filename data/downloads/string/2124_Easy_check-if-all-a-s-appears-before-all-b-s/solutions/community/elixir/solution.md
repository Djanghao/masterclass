# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4606937/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4606937/)

---

# Approach
Iterate the characters and check if an 'a' appears after a 'b' has appeared.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec check_string(s :: String.t) :: boolean
  def check_string(s), do: do_check_string(s, false)

  defp do_check_string(<<ch, rest::bytes>>, b_appeared?) do
    cond do
      ch == ?a and b_appeared? -> false
      ch == ?b -> do_check_string(rest, true)
      true -> do_check_string(rest, b_appeared?)
    end
  end
  defp do_check_string(_, _), do: true
end
```