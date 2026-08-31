# Elixir, euclidean algorithm

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4567496/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4567496/)

---

# Approach
Iterate the numbers and find the maximum and the minimum numbers. Find gcd for those numbers using euclidean algorithm.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_gcd(nums :: [integer]) :: integer
  def find_gcd(nums) do
    {max, min} = find_max_min(nums, -1, nil)
    gcd(max, min)
  end

  defp find_max_min([hd | tl], max, min) do
    max = if hd > max, do: hd, else: max
    min = if hd < min, do: hd, else: min
    find_max_min(tl, max, min) 
  end
  defp find_max_min(_, max, min), do: {max, min}

  defp gcd(num1, num2) do
    remainder = rem(num1, num2)
    if remainder == 0, do: num2, else: gcd(num2, remainder)
  end
end
```