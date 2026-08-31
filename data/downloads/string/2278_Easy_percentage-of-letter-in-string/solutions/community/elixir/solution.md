# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4646797/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4646797/)

---

# Complexity
- Time complexity:
O(n) where n is the length of s

- Space complexity:
O(1)
# Code
```
defmodule Solution do
  @spec percentage_letter(s :: String.t, letter :: char) :: integer
  def percentage_letter(s, letter) do
    letter_count = for <<x <- s>>, x == letter, reduce: 0 do
      acc -> acc + 1
    end
    (letter_count/byte_size(s) * 100) |> floor
  end
end
```