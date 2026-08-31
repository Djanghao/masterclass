# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4612960/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4612960/)

---

# Approach
Fill the string with fill character. Iterate and create groups of k.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec divide_string(s :: String.t, k :: integer, fill :: char) :: [String.t]
  def divide_string(s, k, fill) do 
    size = byte_size(s)
    filled_s = case rem(size, k) do 
      0 -> s
      x -> <<s::bytes, String.duplicate(<<fill>>, k - x)::bytes>>
    end
    for <<group::bytes-size(k) <- filled_s>>, do: group
  end
end
```