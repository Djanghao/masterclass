# Elixir solution use Enum.reduce()

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3521386/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3521386/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 428ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 82.3MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec maximum_cost_substring(s :: String.t, chars :: String.t, vals :: [integer]) :: integer
  def maximum_cost_substring(s, chars, vals) do
    char_dict = Enum.reduce(String.to_charlist(chars), {0, %{}}, fn ch, {i, dic} ->
      {i + 1, Map.put(dic, ch, Enum.at(vals, i))}
    end) |> elem(1)

    String.to_charlist(s) |>
    Enum.reduce({0, 0}, fn ch, {max_cost, curr_cost} ->
      curr_cost = curr_cost + Map.get(char_dict, ch, ch - ?a + 1)
      curr_cost =
        if curr_cost < 0 do
          0
        else
          curr_cost
        end
      {max(curr_cost, max_cost), curr_cost}
      end) |> elem(0)
  end
end

```