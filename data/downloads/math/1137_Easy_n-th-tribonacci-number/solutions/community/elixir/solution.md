# Recursive solution with Agent (for memoization)

**Author:** slickcodes
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/5843143/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/5843143/)

---

# Code
```elixir []
defmodule Solution do
    use Agent
    def tribonacci(0), do: 0
    def tribonacci(1), do: 1
    def tribonacci(2), do: 1
    def tribonacci(n) do
        Agent.start(fn -> [1, 1, 0] end, name: get_name(n))
        calculate(n)
    end

    defp calculate(n) do
        state = Agent.get(get_name(n), & &1)

        if length(state) > n  do
            hd(state)
        else
            [n1, n2, n3 | _] = state
            result = n1 + n2 + n3
            Agent.update(get_name(n), &([result | &1]))
            calculate(n)
        end
    end

    # Need this hack, otherwise the same state will be used for all test cases
    defp get_name(n) do
        "#{__MODULE__}-#{n}" |> String.to_atom()
    end
end

```