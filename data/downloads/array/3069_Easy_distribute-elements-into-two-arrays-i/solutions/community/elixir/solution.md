# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4845736/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4845736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 290ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.29MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec result_array(nums :: [integer]) :: [integer]
  def result_array(nums) do
    [num1 | [num2 | tail]] = nums
    {arr1, arr2} =
      Enum.reduce(tail, {[num1], [num2]}, fn num, {arr1, arr2} ->
        if arr1 |> hd > arr2 |> hd do
          {[num] ++ arr1, arr2}
        else
          {arr1, [num] ++ arr2}
        end
      end)
    (arr1 |> Enum.reverse()) ++ (arr2 |> Enum.reverse())
  end
end

```