# Elixir my solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/3283260/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/3283260/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 224ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec smallest_number(pattern :: String.t) :: String.t
  def smallest_number(pattern) do
    smallest_number(pattern, 0, String.length(pattern), "", "")
  end

  @spec smallest_number(pattern :: String.t, idx :: integer, len_patter :: integer, stack :: String.t, res :: String.t) :: String.t
  def smallest_number(_, idx, len_pattern, stack, res) when idx == len_pattern + 1 do
      res <> String.reverse(stack)
  end

  def smallest_number(pattern, idx, _, stack, res) do
    n_stack = stack <> Integer.to_string(idx + 1)
    if String.at(pattern, idx) == "I" do
      smallest_number(pattern, idx + 1, String.length(pattern), "", res <> String.reverse(n_stack))
    else
      smallest_number(pattern, idx + 1, String.length(pattern), n_stack, res)
    end
  end
end

```