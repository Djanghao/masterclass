# k_sum implementation

**Author:** harfangk
**Votes:** 0
**Link:** [https://leetcode.com/problems/4sum/solutions/3684805/](https://leetcode.com/problems/4sum/solutions/3684805/)

---

# Intuition
After 2Sum and 3Sum, 4Sum just needs another loop over 3Sum problem. But I saw the discussion about generalized KSum solution, so decided to try it out.

# Approach
Given `k` required elements that sum up to `target`, iterate over `nums = [n | rest]` by calling `k_sum(rest, target - n, k - 1)`. We sort `nums` and use `MapSet` for easier removal of duplicates. 

First base case is when `length(nums) < k`, where we return `[]`.
Second base case is when `k == 2`, where we use two `MapSet` to remember previously seen elements and store pairs.

For example, with `target = 0, k = 4, nums = [-2,-1,0,0,1,2]`, with `a,b,c,d` as solutions, the following calls will be made:
```
k_sum([-2,-1,0,0,1,2], 0, 4)

# With a = -2,
k_sum([-1,0,0,1,2], 2, 3)
## With b = -1
k_sum([0,0,1,2], 3, 2)
### ans = [-2, -1, 1, 2]

# With a = -2,
k_sum([0,0,1,2], 2, 3)
## With b = 0,
k_sum([0,1,2], 2, 2)
### ans = [-2, 0, 0, 2]

# With a = -2,
k_sum([0,1,2], 2, 3)
## With b = 0,
k_sum([1,2], 2, 3)
### This loop has no answer

k_sum([-1,0,0,1,2], 0, 4)

# With a = -1,
k_sum([0,0,1,2], 1, 3)
## With b = 0,
k_sum([0,1,2], 1, 2)
### ans = [-1, 0, 0, 1]

# With a = -1,
k_sum([0,1,2], 1, 3)
## With b = 0,
k_sum([1,2], 1, 2)
### This loop has no answer

k_sum([0,0,1,2], 0, 4)
# With a = 0,
k_sum([0,1,2], 0, 3)
## With b = 0,
k_sum([1,2], 0, 2)
### This loop has no answer

# Final answer is:
# [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
```



# Complexity
- Time complexity: $$O(n^3)$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec four_sum(nums :: [integer], target :: integer) :: [[integer]]
  def four_sum(nums, target) do
    nums
    |> Enum.sort()
    |> k_sum(target, 4)
  end

  defp k_sum(nums, target, k) when length(nums) < k, do: []
  defp k_sum(nums, target, 2), do: two_sum(nums, target)
  defp k_sum(nums, target, k) do
    nums
    |> Enum.with_index()
    |> Enum.reduce(MapSet.new(), fn {n, i}, map_set -> 
        rest = Enum.drop(nums, i + 1)
        new_target = target - n
        results = 
          k_sum(rest, new_target, k - 1)
          |> Enum.into(MapSet.new(), fn result -> [n | result] end)
        new_map_set = MapSet.union(map_set, results)
    end)
    |> MapSet.to_list()
  end

  defp two_sum(nums, target) when length(nums) < 2, do: []
  defp two_sum(nums, target) do
    Enum.reduce(nums, {MapSet.new(), MapSet.new()}, fn n, {visited, results} -> 
      new_results = 
        if (MapSet.member?(visited, target - n)) do
          MapSet.put(results, [min(n, target - n), max(n, target - n)])
        else
          results
        end
      new_visited = MapSet.put(visited, n)
      {new_visited, new_results}
    end)
    |> elem(1)
    |> MapSet.to_list()
  end
end

```