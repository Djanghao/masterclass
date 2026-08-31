# [Elixir] Sorting with tail recursion

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/2036213/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/2036213/)

---

Since we only care about the final number of beans, we don't care about the original order of the bags. So we can freely sort them; this is still efficient even in functional programming by means of merge sort (implemented in Elixir as Enum.sort()).  

The default case would be to just dump all the beans out of all of the bags. This would cost Enum.sum(beans) to accomplish, but it is a valid (non-optimal solution). 

If we don't dump all the beans, then we are instead going to be left with some number of bags m, each containing k beans. That means that instead of dumping Enum.sum(beans), we instead are dumping Enum.sum(beans) - mk. We're essentially solving for the maximum sive of a rectancle under a curve.

In imperative programming, we'd do this with a for-loop and side effects, but in Elixir or other functional languages we do a tail recursion. To avoid messy recomputation we can compute the total number of beans and the length of the beans array up-front and keep those as an extra parameter. 

The time complexity is O(n log n) for the merge sort and O(n) for the tail recursion. Our marginal space complexity (i.e. excluding input) is O(n) for the merge sort, which is slightly less efficient than an imperative sort, but our total space complexity (including input space) is still just O(n). We aren't using any extra space for the tail recursion.

```
defmodule Solution do
  @spec minimum_removal(beans :: [integer]) :: integer
  def minimum_removal(beans) do
      total = Enum.sum(beans)
      calc_minimum_removal(Enum.sort(beans), total, length(beans), total)
  end

  def calc_minimum_removal([], removed, 0, total) do
    removed
  end

  def calc_minimum_removal([head|tail], removed, count, total) do
    alternative_removed = total - head * count
    calc_minimum_removal(tail, min(removed, alternative_removed), count-1, total)
  end
end
```