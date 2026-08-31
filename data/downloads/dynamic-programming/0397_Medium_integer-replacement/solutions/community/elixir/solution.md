# Elixir with guard clauses beats 100% on both time & space complexity

**Author:** stepchud
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/3617677/](https://leetcode.com/problems/integer-replacement/solutions/3617677/)

---

# Intuition
Halving the number is the fastest way to get to 1.
The main decision is whether to +1 or -1 odd numbers. This algorithm checks if the result of +1 allows the answer to be divided by 4, i.e. it can be halved twice the next two turns. Otherwise it's equivalent or worse than -1, so we choose -1.

# Approach
This algorithm makes heavy use of guards in Elixir. These allow you to provide separate function definitions `when` the arguments match the guard clause, and checking remainder with `Kernel.rem/2` is allowed in guards.

# Complexity
- Time complexity:
I think it's O(log n) because some mathy person on here with a similar algorithm said so

- Space complexity:
space complexity is about the stack which is also O(log n) due to recursion.

# Code
```
defmodule Solution do
  @spec integer_replacement(n :: integer) :: integer
  def integer_replacement(n) do
    next_step(n, 0)
  end
  # 3 base cases
  defp next_step(n, steps) when n == 1, do: steps
  defp next_step(n, steps) when n == 2, do: steps + 1
  defp next_step(n, steps) when n == 3, do: steps + 2
  # divide by 2
  defp next_step(n, steps) when rem(n, 2) == 0 do
    next_step(div(n, 2), steps + 1)
  end
  # choose +1
  defp next_step(n, steps) when rem(n + 1, 4) == 0 do
    next_step(n + 1, steps + 1)
  end
  # else -1
  defp next_step(n, steps) do
    next_step(n - 1, steps + 1)
  end
end
```