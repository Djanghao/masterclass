# Elixir - Simple Solution w/o Using Map

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5260888/](https://leetcode.com/problems/find-common-characters/solutions/5260888/)

---

# Code
```elixir
defmodule Solution do
  @spec common_chars([String.t]) :: [String.grapheme]
  def common_chars(words) do
    words
    |> Enum.map(&String.graphemes/1)  # step 1
    |> Enum.reduce(& &2 -- &2 -- &1)  # step 2
  end
end
```

# Time Complexity
- Step 1 takes $$O(\\sum_{i=0}^{n-1}|word_i|)$$ time.
- Step 2 takes $$O(\\sum_{i=1}^{n-1}(|word_{i-1}| + |word_i|)\\log|word_i|)$$ time (in worst cases).

The dominant step is step 2.