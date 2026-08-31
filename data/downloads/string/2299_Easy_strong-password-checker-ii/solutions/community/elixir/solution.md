# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/4652686/](https://leetcode.com/problems/strong-password-checker-ii/solutions/4652686/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec strong_password_checker_ii(password :: String.t) :: boolean
  def strong_password_checker_ii(password) do
    byte_size(password) >= 8 && do_strong_password_checker(password, nil, {false, false, false, false})
  end 

  defp do_strong_password_checker(<<ch, rest::bytes>>, prev, {lower?, upper?, digit?, special?}) do
    cond do
      ch == prev -> false
      ch >= ?a && ch <= ?z -> do_strong_password_checker(rest, ch, {true, upper?, digit?, special?})
      ch >= ?A && ch <= ?Z -> do_strong_password_checker(rest, ch, {lower?, true, digit?, special?})
      ch >= ?0 && ch <= ?9 -> do_strong_password_checker(rest, ch, {lower?, upper?, true, special?})
      true -> do_strong_password_checker(rest, ch, {lower?, upper?, digit?, true})
    end
  end
  defp do_strong_password_checker(_, _, {lower?, upper?, digit?, special?}), do: lower? && upper? && digit? && special?
end
```