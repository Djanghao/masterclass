# Elixir, tuple

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/4740991/](https://leetcode.com/problems/prime-in-diagonal/solutions/4740991/)

---

# Complexity
- Time complexity:
O(n * m) where n is the length of nums and m is the length of each list

- Space complexity:
O(n * m)

# Code
```
defmodule Solution do
  @spec diagonal_prime(nums :: [[integer]]) :: integer
  def diagonal_prime(nums) do
    grid = Enum.map(nums, &List.to_tuple/1) |> List.to_tuple
    max_ri = tuple_size(grid) - 1
    max_ci = (elem(grid, 0) |> tuple_size) - 1
    for _ <- 0..max_ri, reduce: {0, 0, 0, max_ci, 0} do
      {li, lj, ri, rj, res} -> 
        l_el = get_el(grid, li, lj)
        r_el = get_el(grid, ri, rj)
        res = if l_el > res && prime?(l_el), do: l_el, else: res
        res = if r_el > res && prime?(r_el), do: r_el, else: res
        {li + 1, lj + 1, ri + 1, rj - 1, res}                      
    end |> elem(4)
  end

  defp get_el(tuple, i, j), do: elem(tuple, i) |> elem(j)

  defp prime?(1), do: false
  defp prime?(n) when n == 2 or n == 3, do: true
  defp prime?(n), do: Enum.all?(2..(:math.sqrt(n) |> floor), &(rem(n, &1) != 0))
end
```