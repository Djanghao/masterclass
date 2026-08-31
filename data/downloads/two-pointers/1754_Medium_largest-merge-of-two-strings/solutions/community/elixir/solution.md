# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3705914/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3705914/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 482ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 68.4MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec largest_merge(word1 :: String.t, word2 :: String.t) :: String.t
  def largest_merge(word1, word2) do
    largest_merge(String.codepoints(word1), String.codepoints(word2), "")
  end

  @spec largest_merge(word1 :: [char], word2 :: [char], ans :: String.t) :: String.t
  def largest_merge(word1, word2, ans) when word1 == [] or word2 == [] do
    ans <> to_string(word1) <> to_string(word2)
  end

  def largest_merge([h1 | t1], [h2 | t2], ans) when [h1 | t1] > [h2 | t2] do
    largest_merge(t1, [h2 | t2], ans <> h1)
  end

  def largest_merge([h1 | t1], [h2 | t2], ans) do
    largest_merge([h1 | t1], t2, ans <> h2)
  end
end

```