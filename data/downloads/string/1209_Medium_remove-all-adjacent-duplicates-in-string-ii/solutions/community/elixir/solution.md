# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4949028/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4949028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 4391ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 94.89MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  def remove_duplicates(s, k) when length(s) < k do
    s
  end

  def remove_duplicates(s, k) do
    st =
      Enum.reduce(String.to_charlist(s), [], fn ch, st ->
        if Enum.count(st) > 0 and st |> hd |> hd == ch do
          [head | tail] = st
          [t_ch | [cnt | _]] = head
          if cnt + 1 == k do
            tail
          else
            [[t_ch, cnt + 1]] ++ tail
          end
        else
          [[ch, 1]] ++ st
        end
      end)
    |> Enum.reverse()
    Enum.reduce(st, "", fn cur, res ->
      [ch, cnt] = cur
      res <> String.duplicate(<<ch>>, cnt)
    end)
  end
end

```