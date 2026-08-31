# [Elixir] Simple Counting | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5761410/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5761410/)

---

![image.png](./images/0.png)

# Approach
Iterate over the array, count the number that has remain when being divided by 3.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec minimum_operations(nums :: [integer]) :: integer
  def minimum_operations([]), do: 0
  def minimum_operations([h | t]) when rem(h, 3) == 0, do: minimum_operations(t)
  def minimum_operations([h | t]), do: 1 + minimum_operations(t)
end
```