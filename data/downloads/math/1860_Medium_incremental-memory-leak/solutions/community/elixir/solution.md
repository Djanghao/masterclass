# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/1869619/](https://leetcode.com/problems/incremental-memory-leak/solutions/1869619/)

---

```elixir
defmodule Solution do
  @spec mem_leak(memory1 :: integer, memory2 :: integer) :: [integer]
  def mem_leak(memory1, memory2) do
    mem_leak(1, memory1, memory2)
  end

  def mem_leak(i, memory1, memory2) do
    cond do
      i > memory1 and i > memory2 -> [i, memory1, memory2]
      memory1 >= memory2 -> mem_leak(i + 1, memory1 - i, memory2)
      true -> mem_leak(i + 1, memory1, memory2 - i)
    end
  end
end
```