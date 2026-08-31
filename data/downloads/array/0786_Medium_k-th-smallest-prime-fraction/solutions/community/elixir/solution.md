# Elixir - Map and Sort

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5140952/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5140952/)

---

# Approach
Get all possible fractions then sort. Keep note of the original numbers of the fraction to return them at the end.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n^2)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec kth_smallest_prime_fraction(arr :: [integer], k :: integer) :: [integer]
  def kth_smallest_prime_fraction(arr, k) do
    {x, y, _frac} =
    arr
    |> Enum.map(fn x -> arr |> Enum.map(& {&1, x}) end) 
    |> List.flatten() 
    |> Enum.reject(fn {x, y} -> x <= y end) 
    |> Enum.map(fn {x, y} -> {x, y, y/x} end) 
    |> Enum.sort_by(fn {_x, _y, frac} -> frac end)
    |> Enum.at(k - 1)

    [y, x]
  end
end
```