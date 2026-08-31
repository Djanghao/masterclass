# Elixir - Easy solution without (explicit) recursion

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5723666/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5723666/)

---

# Intuition

Just simulate the process. But we know that each round except the last one consumes same amount of chalk, so we only need to simulate the last round.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec chalk_replacer(chalk :: [integer], k :: integer) :: integer
  def chalk_replacer(chalk, k) do
    k = rem(k, Enum.sum(chalk))

    chalk
    |> Stream.with_index()
    |> Enum.reduce_while(k, fn
      {c, i}, k when c > k -> {:halt, i}
      {c, _}, k -> {:cont, k - c}
    end)
  end
end
```