# O(n + m) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/5405730/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/5405730/)

---

# Complexity
- Time complexity:$$O(n + m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n + m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Elixir []
defmodule Solution do
  @spec intersection(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def intersection(nums1, nums2), do: Enum.to_list(MapSet.intersection(MapSet.new(nums1), MapSet.new(nums2)))
end
```
```Erlang []
-spec intersection(Nums1 :: [integer()], Nums2 :: [integer()]) -> [integer()].
intersection(Nums1, Nums2) -> sets:to_list(sets:intersection(sets:from_list(Nums1), sets:from_list(Nums2))).
```
```rust []
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        use std::{collections::HashSet, iter::FromIterator};
         HashSet::<i32>::from_iter(nums1)
            .intersection(&HashSet::<i32>::from_iter(nums2))
            .map(|&n| n)
            .collect()
    }
}
```
