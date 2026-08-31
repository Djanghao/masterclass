# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4195122/](https://leetcode.com/problems/third-maximum-number/solutions/4195122/)

---

# Approach
Iterates the list and assigns the first, second and third max accordingly at each iteration. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec third_max(nums :: [integer]) :: integer
  @min -1 * (2**31) - 1
  def third_max(nums), do: do_third_max(nums, @min, @min, @min, 0)
  
  defp do_third_max([hd | tl], f, s, t, len) when hd == f or hd == s or hd == t, do: do_third_max(tl, f, s, t, len)
  defp do_third_max([hd | tl], f, s, t, len) when hd > f, do: do_third_max(tl, hd, f, s, len + 1)
  defp do_third_max([hd | tl], f, s, t, len) when hd > s, do: do_third_max(tl, f, hd, s, len + 1)
  defp do_third_max([hd | tl], f, s, t, len) when hd > t, do: do_third_max(tl, f, s, hd, len + 1)
  defp do_third_max([_ | tl], f, s, t, len), do: do_third_max(tl, f, s, t, len)
  defp do_third_max(_, f, _, t, len), do: if len < 3, do: f, else: t
end
```