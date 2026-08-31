# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4781257/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4781257/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 261ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.14MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec construct_array(n :: integer, k :: integer) :: [integer]
  def construct_array(n, k) do
    helper(n, k, 1, n, []) |> Enum.reverse()
  end

  @spec helper(n :: integer, k :: integer, l :: integer, r :: integer, ans :: [integer]) :: [integer]
  def helper(n, k, l, r, ans) when l <= r do
    if k > 1 do
      if rem(k, 2) != 0 do
        helper(n, k - 1, l + 1, r, [l] ++ ans)
      else
        helper(n, k - 1, l, r - 1, [r] ++ ans)
      end
    else
      helper(n, k, l + 1, r, [l] ++ ans)
    end
  end

  def helper(_n, _k, _l, _r, ans) do
    ans
  end
end

```