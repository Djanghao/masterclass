# Elixir, uses for comprehension O(n²)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5216912/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5216912/)

---

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec number_of_pairs(nums1 :: [integer], nums2 :: [integer], k :: integer) :: integer
  def number_of_pairs(nums1, nums2, k) do
    for i <- nums1, j <- nums2, rem(i, j * k) == 0, reduce: 0 do
      acc -> acc + 1
    end
  end
end
```