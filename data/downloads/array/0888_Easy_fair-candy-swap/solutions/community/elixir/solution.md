# Elixir, uses MapSet

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/4282230/](https://leetcode.com/problems/fair-candy-swap/solutions/4282230/)

---

# Approach
Compute the sum of alice's candies and bob's candies. The target size of candies for both alice and bob will be the total number of candies/2. Iterate alice's sizes and check if a complement exists in bob's sizes.

target = (alice_sum + bob_sum)/2

For an alice's candy, the complement will be
target - (alice_sum - candy_size) 

# Complexity
- Time complexity:
O(m + n) where m and n are the lengths of alice_sizes and bob_sizes

- Space complexity:
O(m + n)

# Code
```
defmodule Solution do
  @spec fair_candy_swap(alice_sizes :: [integer], bob_sizes :: [integer]) :: [integer]
  def fair_candy_swap(alice_sizes, bob_sizes) do 
    alice_sum = Enum.sum(alice_sizes)
    target = div(alice_sum + Enum.sum(bob_sizes), 2)
    do_fair_candy_swap(alice_sizes, alice_sum, target, MapSet.new(bob_sizes))
  end
  
  defp do_fair_candy_swap([hd | tl], a_sum, target, b_set) do
    complement = target - (a_sum - hd) 
    if MapSet.member?(b_set, complement), do: [hd, complement], else:  do_fair_candy_swap(tl, a_sum, target, b_set)
  end
end
```