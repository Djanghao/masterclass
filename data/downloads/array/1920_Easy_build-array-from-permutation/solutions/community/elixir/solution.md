# [Elixir] using Enum.map and argument placeholder

**Author:** u4989190
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/2453661/](https://leetcode.com/problems/build-array-from-permutation/solutions/2453661/)

---

the first & is a shortcut for lambda function( fn x -> dododo end).
the second & is argument placeholder.

```
defmodule Solution do
  @spec build_array(nums :: [integer]) :: [integer]
  def build_array(nums) do
    ans = Enum.map(
      nums,
      &(Enum.at(nums, &1))
    )
  end
end

```