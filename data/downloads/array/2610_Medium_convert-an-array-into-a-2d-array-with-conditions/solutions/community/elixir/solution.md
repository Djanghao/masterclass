# Rather straightforward way of doing it

**Author:** endrin
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4497086/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4497086/)

---

# Intuition / Approach
You recursively extract distinct numbers out of `nums` into a row, and leave the rest for next rows.

# Code
```
defmodule Solution do
  @spec find_matrix(nums :: [integer]) :: [[integer]]
  def find_matrix(nums) do
    Stream.unfold(nums, fn
      [] ->
        nil

      ns ->
        distinct = Enum.uniq(ns)
        {distinct, ns -- distinct}
    end)
    |> Enum.to_list()
  end
end
```