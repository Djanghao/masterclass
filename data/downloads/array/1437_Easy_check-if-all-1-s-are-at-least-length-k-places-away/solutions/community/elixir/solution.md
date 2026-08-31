# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4364692/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4364692/)

---

# Approach
Iterate the numbers and keep track of indexes of the numbers and the previously occured index of 1. Check if the distance between the previous 1 index and current 1 index is >= k. If so update the prev_one_ind and proceed else return false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec k_length_apart(nums :: [integer], k :: integer) :: boolean
  def k_length_apart(nums, k), do: do_k_length_apart(nums, k, 0, nil)

  defp do_k_length_apart([1 | tl], k, i, prev_1_ind) do
    if prev_1_ind && (i - prev_1_ind) - 1 < k, do: false, else: do_k_length_apart(tl, k, i + 1, i)
  end
  defp do_k_length_apart([_ | tl], k, i, prev_1_ind), do: do_k_length_apart(tl, k, i + 1, prev_1_ind)
  defp do_k_length_apart(_, _, _, _), do: true
end
```