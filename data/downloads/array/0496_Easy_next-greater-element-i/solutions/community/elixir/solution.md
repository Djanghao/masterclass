# Elixir, stack and map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/4209555/](https://leetcode.com/problems/next-greater-element-i/solutions/4209555/)

---

# Complexity
- Time complexity:
O(m + n)  where m and n are the lengths of nums1 and nums2

- Space complexity:
O(m + n)

# Code
```
defmodule Solution do
  @spec next_greater_element(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def next_greater_element(nums1, nums2) do 
    n2_rev = Enum.reverse(nums2)
    res_map = for x <- n2_rev, reduce: {[], %{}} do
      {stack, res_map} -> {res, stack} = nxt_greatest_elem(x, stack) |> IO.inspect
                          {stack, Map.put(res_map, x, res)}
    end |> elem(1)
    for x <- nums1, do: res_map[x] 
  end

  defp nxt_greatest_elem(el, []), do: {-1, [el]}
  defp nxt_greatest_elem(el, [hd | tl] = stack) do
    if el >= hd, do: nxt_greatest_elem(el, tl), else: {hd, [el | stack]}
  end
end
```