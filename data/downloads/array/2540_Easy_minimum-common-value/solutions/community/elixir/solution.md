# Elixir - Pattern Matching ❤️

**Author:** Nono31
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4845570/](https://leetcode.com/problems/minimum-common-value/solutions/4845570/)

---




# Code
```
defmodule Solution do
  @spec get_common(nums1 :: [integer], nums2 :: [integer]) :: integer
  def get_common(nums1, nums2) do
    do_get(nums1, nums2)
  end

  defp do_get(_, []), do: -1
  defp do_get([], _), do: -1
  defp do_get([a | _], ([a | _])), do: a
  defp do_get([a | t], [b | _] = nums2) when a < b, do: do_get(t,nums2)
  defp do_get([a | _] = nums1, [b | t]) when a > b, do: do_get(nums1, t)
end
```