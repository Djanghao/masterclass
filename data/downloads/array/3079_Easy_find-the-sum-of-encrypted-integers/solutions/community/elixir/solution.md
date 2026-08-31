# Straightforward Elixir solution

**Author:** nickshbln
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4976551/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4976551/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->



# Code
```
defmodule Solution do
  @spec sum_of_encrypted_int(nums :: [integer]) :: integer
  def sum_of_encrypted_int(nums) do
    nums
    |> Enum.map(fn x -> Integer.digits(x) end)
    |> Enum.map(fn x -> Enum.map(x, fn y -> Enum.max(x) end) end)
    |> Enum.map(fn x -> Integer.undigits(x) end)
    |> Enum.sum()
  end
end
```