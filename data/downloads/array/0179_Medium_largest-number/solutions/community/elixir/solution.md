# O(NLogN) time and O(N) memory complexity in Elixir

**Author:** danielsolyom
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number/solutions/5809548/](https://leetcode.com/problems/largest-number/solutions/5809548/)

---

# Intuition
Hours of struggle, multiple failed approaches.

# Approach
The idea is to sort the numbers with a custom comparator. Compare the concatenation of two numbers in both possible orders and decide the sorting order accordingly.

# Complexity
- Time complexity: **O(NLogN)**
- Space complexity: **O(N)**

# Code
```elixir []
defmodule Solution do
    @spec largest_number(nums :: [integer]) :: String.t
    def largest_number(nums) do
        nums
        |> Enum.map(&Integer.digits/1)
        |> Enum.sort(
            fn a, b ->
                Integer.undigits(a ++ b) >= Integer.undigits(b ++ a)
            end
        )
        |> Enum.map(&Integer.undigits/1)
        |> Enum.join
        |> (fn x -> if String.starts_with?(x, "0"), do: "0", else: x end).()
    end
end
```