# Elixir, two pass O(n)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4337897/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4337897/)

---

# Approach
Reverse the numbers in one pass. Iterate the reversed numbers one by one and accumulate the result.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec replace_elements(arr :: [integer]) :: [integer]
  def replace_elements(arr), do: do_replace_elements(Enum.reverse(arr), -1, [])

  defp do_replace_elements([hd | tl], max_n, acc), do: do_replace_elements(tl, max(hd, max_n), [max_n | acc])
  defp do_replace_elements([], _, acc), do: acc
end
```