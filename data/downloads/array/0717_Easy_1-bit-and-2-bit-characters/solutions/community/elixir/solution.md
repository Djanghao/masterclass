# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/4255220/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/4255220/)

---

# Approach
Uses tail call recursion and pattern matching to iterate each element. If the list's head is a 1 skip two elements, if the list's head is a 0, skip one element. If the list has only one element left in the end, then the result is true else false.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_one_bit_character(bits :: [integer]) :: boolean
  def is_one_bit_character([1, _ | tl]) do
    if tl == [], do: false, else: is_one_bit_character(tl)
  end
  def is_one_bit_character([0 | tl]), do: tl == [] || is_one_bit_character(tl)
end
```