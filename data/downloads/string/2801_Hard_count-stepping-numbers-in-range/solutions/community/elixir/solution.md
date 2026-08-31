# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3896592/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3896592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 653ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 63.7MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec count_stepping_numbers(low :: String.t, high :: String.t) :: integer
  def count_stepping_numbers(low, high) do
    mod = 1_000_000_007
    {num1, is_step1} = count_step_numbers(high)
    {num0, _} = count_step_numbers(low)
    if is_step1 do
      rem(num1 + 1 - num0 + mod, mod)
    else
      rem(num1 - num0 + mod, mod)
    end
  end

  @spec count_step_numbers(high :: String.t) :: {integer, bool}
  def count_step_numbers(high) do
    mod = 1_000_000_007
    is_step_number = true
    num = String.to_integer(String.at(high, 0)) + 1
    counts = for _ <- 0..9, do: 0
    tmp = for _ <- 0..9, do: 0
    {_, _, counts, _, is_step_number} =
      Enum.reduce(String.to_charlist(high), {0, tmp, counts, num, is_step_number}, fn ch, {i, tmp, counts, num, is_step_number} ->
        tmp =
          Enum.reduce(1..8, tmp, fn j, tmp ->
            List.replace_at(tmp, j, rem(Enum.at(counts, j - 1) + Enum.at(counts, j + 1), mod))
          end)
        tmp = List.replace_at(tmp, 0, Enum.at(counts, 1))
        tmp = List.replace_at(tmp, 9, Enum.at(counts, 8))
        num0 = ch - ?0
        j_end = if i > 0, do: 9, else: num0 - 1
        tmp =
          if j_end >= 1 do
            Enum.reduce(1..j_end, tmp, fn j, tmp ->
              List.replace_at(tmp, j, Enum.at(tmp, j) + 1)
            end)
          else
            tmp
          end
        {tmp, is_step_number} =
          if is_step_number do
            is_step_number =
              if abs(num - num0) != 1 do
                false
              else
                is_step_number
              end
            tmp =
              if 0 <= (num - 1) and (num - 1) < num0 do
                List.replace_at(tmp, num - 1, Enum.at(tmp, num - 1) + 1)
              else
                tmp
              end
            tmp =
              if (num + 1) < num0 do
                List.replace_at(tmp, num + 1, Enum.at(tmp, num + 1) + 1)
              else
                tmp
              end
            {tmp, is_step_number}
          else
            {tmp, is_step_number}
          end
          {i + 1, counts, tmp, num0, is_step_number}
      end)
    {rem(Enum.sum(counts), mod), is_step_number}
  end
end

```