# Elixir, uses map to store set bits

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4788704/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4788704/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec sum_indices_with_k_set_bits(nums :: [integer], k :: integer) :: integer
  def sum_indices_with_k_set_bits(nums, k) do
    for x <- nums, reduce: {0, 0, %{0 => 0}} do
      {i, acc, bit_map} -> 
         no_of_bits = bit_map[div(i, 2)] + rem(i, 2)
         bit_map = Map.put(bit_map, i, no_of_bits)
         acc = if no_of_bits == k, do: acc + x, else: acc
         {i + 1, acc, bit_map}
    end |> elem(1)
  end
end
```