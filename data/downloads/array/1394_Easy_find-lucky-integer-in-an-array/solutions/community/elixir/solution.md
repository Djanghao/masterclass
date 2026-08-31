# Elixir, Enum.frequencies

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/4355845/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/4355845/)

---

# Approach
Use Enum.frequencies to compute the frequencies and use for comprehension to get the max lucky number

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_lucky(arr :: [integer]) :: integer
  def find_lucky(arr) do
    for {x, x} <- Enum.frequencies(arr), reduce: -1 do
      acc -> max(acc, x)
    end
  end
end
```