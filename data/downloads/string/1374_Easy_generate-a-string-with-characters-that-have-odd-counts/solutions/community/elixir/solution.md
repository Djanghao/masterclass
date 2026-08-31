# Elixir, uses String.duplicate

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/4352655/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/4352655/)

---

# Approach
If n is odd, then create a string of "a" n times. If n is even create a string of "a" n - 1 times and concatenate with the string "b"

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec generate_the_string(n :: integer) :: String.t
  def generate_the_string(n) do
    if rem(n, 2) != 0, do: String.duplicate("a", n), else: String.duplicate("a", n - 1) <> "b"
  end
end
```