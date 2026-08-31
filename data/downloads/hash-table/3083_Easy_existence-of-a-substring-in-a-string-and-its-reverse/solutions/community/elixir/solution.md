# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4887172/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4887172/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 295ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.72MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec is_substring_present(s :: String.t) :: boolean
  def is_substring_present(s) do
    is_substring(s, String.reverse(s))
  end

  @spec is_substring(s :: String.t, r_s :: String.t) :: boolean
  def is_substring(s, r_s) do
    l = String.length(r_s)
    cond do
      l <= 1 ->
        false
      String.contains?(s, String.slice(r_s, 0, 2)) ->
        true
      true ->
        is_substring(s, String.slice(r_s, 1..l))
    end    
  end
end

```