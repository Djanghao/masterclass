# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4744737/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4744737/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 264ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.37MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec max_operations(nums :: [integer]) :: integer
  def max_operations(nums) do
    [h0 | [h1 | _]] = nums
    helper(nums, h0 + h1, 0)
  end

  def helper([_h0 | []], _total, ans) do
    ans
  end

  def helper([h0 | [h1 | []]], total, ans) when h0 + h1 != total do
    ans
  end

  def helper([_h0 | [_h1 | []]], _total, ans) do
    ans + 1
  end

  def helper([h0 | [h1 | _tail]], total, ans) when h0 + h1 != total do
    ans
  end

  def helper([_h0 | [_h1 | tail]], total, ans)  do
    helper(tail, total, ans + 1)
  end
end

```