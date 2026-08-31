# Simple Functional Solution

**Author:** brianide
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3724457/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3724457/)

---

# Approach
We can transform the list of digits into a list of run lengths, and then window over this list adding its elements together pairwise, to determine the length of the run created by combining each pair. The maximum of these values is our answer.

In the event that there's only one run, the answer is instead the length of the run minus `1`, since we are required to delete one element.

# Code
```
defmodule Solution do
  @spec longest_subarray(nums :: [integer]) :: integer
  def longest_subarray(nums) do
    Enum.reduce(nums, [0], fn
      0, [n | more] -> [0, n | more]
      1, [n | more] -> [n + 1 | more]
    end)
    |> case do
      [n] -> n - 1
      many -> Enum.chunk_every(many, 2, 1, :discard) |> Enum.map(&Enum.sum/1) |> Enum.max()
    end
  end
end

```