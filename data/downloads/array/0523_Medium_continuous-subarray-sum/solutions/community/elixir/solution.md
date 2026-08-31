# Elixir - prefix sum mod k

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/2745678/](https://leetcode.com/problems/continuous-subarray-sum/solutions/2745678/)

---

```elixir
defmodule Solution do
  @spec check_subarray_sum(nums :: [non_neg_integer], k :: pos_integer) :: boolean
  def check_subarray_sum(nums, k) do
    nums
    |> prefix_sum_rem(k, [0])
    |> has_solution?(0, %{})
  end

  # Convert a list of integers to prefix sum mod k.
  @spec prefix_sum_rem(nums :: [non_neg_integer], k :: pos_integer, acc) :: acc
        when acc: [non_neg_integer]
  defp prefix_sum_rem([], _k, acc), do: Enum.reverse(acc)  # actually we can omit reversing for better performance in the cost of readability.

  defp prefix_sum_rem([h | t], k, [h2 | _] = acc), do:
    prefix_sum_rem(t, k, [rem(h + h2, k) | acc])


  @spec has_solution?([prefix_sum_rem], index, cache :: %{optional(prefix_sum_rem) => index}) :: boolean
        when index: non_neg_integer,
		     prefix_sum_rem: non_neg_integer
  defp has_solution?([], _i, _cache), do: false
                   
  # cache stores each number's first index in the list.
  defp has_solution?([h | t], i, cache) do
    case cache[h] do
	  # if h has not appeared before, 
	  # we put it and its index to the cache,
	  # then recurse.
      nil -> has_solution?(t, i + 1, Map.put(cache, h, i))
	  
	  # if h has appeared before,
	  # and the index of its first appearance is lesser than the current index by 1,
	  # meaning the j'th number in `nums` is multiple of k,
	  # we ignore the current index and move on.
      j when i == j + 1 -> has_solution?(t, i + 1, cache)
	  
	  # if h has appeared before,
	  # and the index of its first appearance is lesser than the current index by more than 1,
	  # then the sum of the sub-list of nums from j + 1 to i is multiple of k,
	  # so we found a solution and there's no need to go on.
      _j -> true
    end
  end
end
```

So why O(n * log(k))? Because in Elixir, a map is not a hash map, but a hash array mapped trie.