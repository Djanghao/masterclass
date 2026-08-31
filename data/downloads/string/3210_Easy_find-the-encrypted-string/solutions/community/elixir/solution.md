# Elixir - String split

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5547040/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5547040/)

---

# Complexity
- Time complexity:
O(n) where n is the length of the string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec get_encrypted_string(s :: String.t, k :: integer) :: String.t
  def get_encrypted_string(s, k) do
    length = byte_size(s)
    first_shifted_char = rem(k, length)
    {first_part, second_part} = String.split_at(s, first_shifted_char)
    second_part <> first_part 
  end
end
```