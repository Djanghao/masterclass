# Solving using elixir

**Author:** matheusbartkev
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458826/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4458826/)

---

# Code
```
defmodule Solution do
    @spec num_rolls_to_target(n :: integer, k :: integer, target :: integer) :: integer
    def num_rolls_to_target(n, k, target) do
        solved_dp = solve(n, k, target, %{})

        solved_dp[{n, target}]
    end

    defp solve(0, _, 0, dp), do: Map.put(dp, {0, 0}, 1)
    defp solve(0, _, _, dp), do: dp
    defp solve(n, k, target, dp) do
        if Map.get dp, {n, target} do
            dp
        else
            new_dp =
            1..k
            |> Enum.to_list
            |> List.foldl(dp,
                fn(el, map) ->
                    solve(n-1, k, target - el, map)
                end
            )

            Map.put(new_dp, {n, target}, 
                1..k
                |> Enum.to_list
                |> List.foldl(0,
                    fn(el, acc) -> 
                        if new_dp[{n-1, target - el}] != nil do
                            rem(acc + new_dp[{n-1, target - el}], 1_000_000_007)
                        else
                            acc
                        end    
                    end
                )
            )
        end
    end
end
```