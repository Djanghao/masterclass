# DFS Elixir solution

**Author:** ronbrz
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/4084653/](https://leetcode.com/problems/path-sum-iii/solutions/4084653/)

---

# Intuition
Traverse the tree, keeping an accumulator `partial_sums` to keep track of all visited nodes, and the accumulated sum from each of those nodes


# Code
```
defmodule Solution do

  def path_sum(nil, _, _), do: 0
  
  @spec path_sum(root :: TreeNode.t | nil, target_sum :: integer, partial_sums :: [integer]) :: integer
  def path_sum(root, target_sum, partial_sums \\\\ []) do
    new_partials = [root.val | Enum.map(partial_sums, &(&1 + root.val))]
    equal_path = Enum.count(Enum.filter(new_partials, &(&1 == target_sum)))
    equal_path + 
      path_sum(root.left, target_sum, new_partials) + 
      path_sum(root.right, target_sum, new_partials)
  end

end
```