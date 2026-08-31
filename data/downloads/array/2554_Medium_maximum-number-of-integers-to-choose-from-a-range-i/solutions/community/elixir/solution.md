# Elixir Solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117895/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117895/)

---

# Complexity
- Time complexity: $$O((m + n)\\log m)$$ where $$m$$ is the length of `banned`.

- Space complexity: $$O(n + m)$$ because under the hood, `--/2` needs to first convert the right hand side to an red-black tree.

The time and space complexity of each step is added as comment in the code (time / space).

# Code
```elixir []
defmodule Solution do
  @spec max_count(banned :: [integer], n :: integer, max_sum :: integer) :: integer
  def max_count(banned, n, max_sum) do
    1..n  # O(1) / O(1)
    |> Enum.to_list()  # O(n) / O(n)
    |> Kernel.--(banned)  # O((m + n) log m) / O(m + n)
    |> Kernel.++([max_sum + 1])  # O(n) / O(n)  this step ensures that the running sum will eventually exceed `max_sum`.
    |> Stream.scan(&+/2)  # O(1) / O(1)  lazily calculates the running sum
    |> Enum.find_index(& &1 > max_sum)  # O(n) / O(1)  find the index of the first running sum that exceeds `max_sum`
  end
end
```