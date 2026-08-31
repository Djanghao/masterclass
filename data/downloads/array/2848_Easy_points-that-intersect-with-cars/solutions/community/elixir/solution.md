# Elixir, line sweep algorithm

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4783985/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4783985/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec number_of_points(nums :: [[integer]]) :: integer
  def number_of_points(nums) do
    line = for [x, y] <- nums, reduce: :array.new([size: 102, fixed: true, default: 0]) do
      acc -> x_val = :array.get(x, acc)
             acc = :array.set(x, x_val + 1, acc)
             y_val = :array.get(y + 1, acc)
            :array.set(y + 1, y_val - 1, acc)
    end
    for i <- 1..100, val = :array.get(i, line), reduce: {0, 0} do
      {sum, res} -> sum = sum + val
                    res = if sum > 0, do: res + 1, else: res
                    {sum, res}
    end |> elem(1)
  end
end
```