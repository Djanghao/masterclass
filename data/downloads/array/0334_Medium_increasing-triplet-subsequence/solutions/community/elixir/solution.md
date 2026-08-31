# tail_recursion |> function_clause_matching = {:ok, O(n)}

**Author:** K11ZU
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5897535/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5897535/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Traverse the list keeping track of seen small numbers
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - `n` possible values for i, `n-1` possible values for j
# Code
```elixir []
defmodule Solution do
  @spec increasing_triplet(nums :: [integer]) :: boolean
  def increasing_triplet(nums, i \\\\ nil, j \\\\ nil)
  def increasing_triplet([n | _], i, j) when j < n do
    true
  end
  def increasing_triplet(nums, i, j) when j < i do
    increasing_triplet(nums, j, i)
  end
  def increasing_triplet([n | tail] = nums, i, j) when i > n do
    increasing_triplet(tail, n, j)
  end
  def increasing_triplet([n | tail] = nums, i, j) when j > n and i < n  do
    increasing_triplet(tail, i, n)
  end
  def increasing_triplet([_ | tail] = nums, i, j) do
    increasing_triplet(tail, i, j)
  end
  def increasing_triplet(_, _, _) do
    false
  end
end
```