# O(n) solution in Elixir

**Author:** swingcloud
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3267922/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3267922/)

---

# Complexity
- Time complexity:
O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_distance(nums1 :: [integer], nums2 :: [integer]) :: integer
  def max_distance(nums1, nums2) do
    run(nums1, nums2, {0, 0, 0})
  end

  def run([] = _nums1, _nums2, {_i, _j, max}), do: max
  def run(_nums1, [] = _nums2, {_i, _j, max}), do: max
  def run([head1 | tail1] = nums1, [head2 | tail2] = nums2, {i, j, max}) do
    if head1 > head2 do
      run(tail1, tail2, {i + 1, j + 1, max})
    else
      run(nums1, tail2, {i, j + 1, max(j - i, max)})
    end
  end
end
```