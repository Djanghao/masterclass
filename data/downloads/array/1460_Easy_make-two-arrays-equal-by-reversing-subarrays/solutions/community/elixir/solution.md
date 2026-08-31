# Elixir, one pass, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/4368725/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/4368725/)

---

# Approach
Iterate over the elements of target and number arrays, use a map to keep track of the balance count of the elements. For the number present in target, increase its count in the frequency map and for the number present in number array, decrease its count in the frequency map. Both lists are equal if the values of elements is zero in the end. If so, the numbers in arrays can be converted into the target array by reversing it's subarrays

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec can_be_equal(target :: [integer], arr :: [integer]) :: boolean
  def can_be_equal(target, arr), do: do_can_be_equal(target, arr, %{})

  defp do_can_be_equal([hd | tl], [hd1 | tl1], freq) do
    freq = Map.update(freq, hd, 1, &(&1 + 1))
    freq = Map.update(freq, hd1, -1, &(&1 - 1))
    do_can_be_equal(tl, tl1, freq)
  end
  defp do_can_be_equal(_, _, freq), do: Map.values(freq) |> Enum.all?(&(&1 == 0))
end
```