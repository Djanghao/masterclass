# Elixir - One-liner Regular Expression Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5120158/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5120158/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Elixir
defmodule Solution do
  @spec reverse_prefix(word :: String.t, ch :: char) :: String.t
  def reverse_prefix(word, ch) do
    Regex.replace(~r/.*?#{[ch]}/, word, &String.reverse/1, global: false)
  end
end
```