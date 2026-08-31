# my solution

**Author:** dtmror01
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/3274218/](https://leetcode.com/problems/permutations-ii/solutions/3274218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec permute_unique(nums :: [integer]) :: [[integer]]
def permute_unique([]), do: [[]]
  def permute_unique(nums) do
    for i <- Enum.uniq(nums), rest <- permute_unique(nums -- [i]), do: [i | rest]
  end

end
```