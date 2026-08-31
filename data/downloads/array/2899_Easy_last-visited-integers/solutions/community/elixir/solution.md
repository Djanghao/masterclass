# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4171718/](https://leetcode.com/problems/last-visited-integers/solutions/4171718/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 285ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 63.5MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec last_visited_integers(words :: [String.t]) :: [integer]
  def last_visited_integers(words) do
    Enum.reduce(words, {0, [], []}, fn word, {count, st, ans} ->
      if word == "prev" do
        len_st = Enum.count(st)
        count = count + 1
        if count <= len_st do
          {count, st, ans ++ [Enum.at(st, len_st - count)]}
        else
          {count, st, ans ++ [-1]}
        end
      else
        {0, st ++ [String.to_integer(word)], ans}
      end
    end) |> elem(2)
  end
end

```