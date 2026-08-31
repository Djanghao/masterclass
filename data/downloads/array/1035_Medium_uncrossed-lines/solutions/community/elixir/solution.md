# Elixir iterative DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3511400/](https://leetcode.com/problems/uncrossed-lines/solutions/3511400/)

---

# Code
```
defmodule Solution do
  @spec max_uncrossed_lines(nums1 :: [integer], nums2 :: [integer]) :: integer
  def max_uncrossed_lines(nums1, nums2) do
    Enum.reduce(nums1, List.duplicate(0, length(nums2)), fn ele1, dp ->
      [0 | dp]
      |> Enum.chunk_every(2, 1, :discard)
      |> Enum.zip(nums2)
      |> Enum.scan(0, fn
        {[a, _], ele2}, _ when ele1 == ele2 -> a + 1
        {[_, b], _}, c -> max(b, c)
      end)
    end)
    |> List.last()
  end
end
```