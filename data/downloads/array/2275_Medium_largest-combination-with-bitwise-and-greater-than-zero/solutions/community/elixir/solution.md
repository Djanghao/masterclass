# Elixir - Bit Manipulation

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6017376/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6017376/)

---

# Approach
For each position in the binary form of each of the candidates, count the number of candidates that have a `1` at that position. Return the max count among all counts at all positions.

# Complexity
- Time complexity: $$O(N \\cdot B)$$ where $$N$$ is the length of the input list `candidates` and $$B$$ is the position of the most significant `1` bit of the largest candidate.

- Space complexity: $$O(1)$$

# Code
```elixir [Stream & Enum]
defmodule Solution do
  import Bitwise

  @spec largest_combination(candidates :: [integer]) :: integer
  def largest_combination(candidates) do
    mask_cap = Enum.max(candidates)

    1
    |> Stream.iterate(& &1 <<< 1)
    |> Stream.take_while(& &1 <= mask_cap)
    |> Stream.map(fn mask ->
      Enum.count(candidates, &(&1 &&& mask) != 0)
    end)
    |> Enum.max()
  end
end
```

```elixir [Without Stream or Enum]
defmodule Solution do
  import Bitwise

  @spec largest_combination(candidates :: [integer]) :: integer
  def largest_combination(candidates) do
    mask_cap = max_num(candidates, nil)
    solve(candidates, 1, mask_cap, 0)
  end

  defp max_num([], acc), do: acc
  defp max_num([h | t], nil), do: max_num(t, h)
  defp max_num([h | t], acc) when h > acc, do: max_num(t, h)
  defp max_num([_ | t], acc), do: max_num(t, acc)

  defp solve(_nums, mask, mask_cap, acc)
       when mask > mask_cap,
       do: acc

  defp solve(nums, mask, mask_cap, acc) do
    count = count_ones(nums, mask, 0)
    new_acc = max(acc, count)
    solve(nums, mask <<< 1, mask_cap, new_acc)
  end

  defp count_ones([], _mask, acc), do: acc

  defp count_ones([h | t], mask, acc)
       when (h &&& mask) != 0,
       do: count_ones(t, mask, acc + 1)

  defp count_ones([_ | t], mask, acc),
       do: count_ones(t, mask, acc)
end
```