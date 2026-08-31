# Elixir - Stack of Stacks

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/5807948/](https://leetcode.com/problems/basic-calculator/solutions/5807948/)

---

# Code
```elixir []
defmodule Solution do
  @spec calculate(s :: String.t) :: integer
  def calculate(s) do
    calc(s, [[]])
  end

  defp calc("", [[num]]), do: num

  defp calc(" " <> rest, stacks), do: calc(rest, stacks)

  defp calc("+" <> rest, [stack | stacks]),
       do: calc(rest, [[:+ | stack] | stacks])

  defp calc("-" <> rest, [stack | stacks]),
       do: calc(rest, [[:- | stack] | stacks])

  defp calc("(" <> rest, stacks), do: calc(rest, [[] | stacks])

  defp calc(")" <> rest, [[val], stack | stacks]),
       do: calc(rest, [reduce(val, stack) | stacks])

  defp calc(s, [stack | stacks]) do
    {num, rest} = pop_num(s, 0)
    calc(rest, [reduce(num, stack) | stacks])
  end

  defp pop_num(<<d, rest::binary>>, acc) when d in ?0..?9 do
    pop_num(rest, acc * 10 + d - ?0)
  end

  defp pop_num(s, acc), do: {acc, s}

  defp reduce(num, []), do: [num]

  defp reduce(num, [:-]), do: [-num]

  defp reduce(n2, [op, n1 | rest]) do
    [apply(Kernel, op, [n1, n2]) | rest]
  end
end
```