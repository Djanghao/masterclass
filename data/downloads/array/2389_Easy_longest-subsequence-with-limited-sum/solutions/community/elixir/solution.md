# Elixir, binary search

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4675253/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4675253/)

---

# Complexity
- Time complexity:
(n + q) * log(n) where n and q are the lengths of nums and queries

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec answer_queries(nums :: [integer], queries :: [integer]) :: [integer]
  def answer_queries(nums, queries) do 
    prefix_tuple = get_prefix_sum(Enum.sort(nums), 0, [])
    max_i = tuple_size(prefix_tuple) - 1
    for x <- queries, do: binary_search(prefix_tuple, 0, max_i, x)
  end

  defp get_prefix_sum([hd | tl], prev_sum, acc) do
    get_prefix_sum(tl, prev_sum + hd, [prev_sum + hd | acc])
  end
  defp get_prefix_sum(_, _, acc), do: Enum.reverse(acc) |> List.to_tuple
  
  defp binary_search(tuple, l, r, x) when l <= r do
    mid = div(l + r, 2)
    case elem(tuple, mid) do
      val when val == x -> mid + 1
      val when x > val -> binary_search(tuple, mid + 1, r, x)
      _ -> binary_search(tuple, l, mid - 1, x)
    end
  end
  defp binary_search(_, l, r, _), do: r + 1
end
```