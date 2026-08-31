# Happy to solve it with pattern matching and recursion

**Author:** cresenciof
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/6066943/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/6066943/)

---

# Code
```elixir []
defmodule Solution do
  defguard is_even(term) when is_number(term) and rem(term, 2) == 0
  defguard is_odd(term) when is_number(term) and rem(term, 2) == 1

  @spec number_of_steps(num :: integer) :: integer
  def number_of_steps(num) do
    step_to_reduce(num, 0)
  end

  defp step_to_reduce(0, counter) do
    counter
  end

  defp step_to_reduce(num, counter) when is_even(num) do
    step_to_reduce(div(num, 2), counter + 1)
  end
  
  defp step_to_reduce(num, counter) when is_odd(num) do
    step_to_reduce(num - 1, counter + 1)
  end
end
```