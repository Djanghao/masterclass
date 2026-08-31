# Simple Elixir solution

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422007/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422007/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each letter in a word we can look back and count the number of missing letters. That is, for example, if the current letter is `a` and the previous one is `b`, we need to insert `c` between them, thus adding 1 to the counter.

# Approach
<!-- Describe your approach to solving the problem. -->
Traverse a string keeping track of the previous letter. Since there are only 3 letters we have exactly 3 cases to handle:
- if letters are same, add 2 to the counter
- if letters are in the correct order (for `b` its previous letter was `a` and so on) keep the counter unchanged
- otherwise add 1 to the counter

Start with the previous as `c` so that it simulates the correct order. After all letters are processed, add `0`, `1` or `2` depending on the last letter.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - traversing the word

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - we're only using constant space and tail-call optimization is applied for recursive calls

# Code
```
defmodule Solution do
    @seq %{
        ?a => ?c,
        ?b => ?a,
        ?c => ?b
    }

    @spec add_minimum(word :: String.t) :: integer
    def add_minimum(word) do
       add(word, ?c, 0) 
    end

    defp add(<<>>, prev, count) do
        cond do
            prev == ?a -> count + 2
            prev == ?b -> count + 1
            true -> count
        end
    end

    defp add(<<curr, rest::binary>>, prev, count) do
        cond do
            curr == prev -> add(rest, curr, count + 2)
            @seq[curr] == prev -> add(rest, curr, count)
            true -> add(rest, curr, count + 1)
        end
    end
end
```
Please upwote if you find my solution helpful!