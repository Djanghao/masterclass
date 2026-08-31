# 100/100 Elixir approach

**Author:** jowi-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/5978564/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/5978564/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The game for this one seemed to be: How long can I put off doing expensive reverses and joins for these strings. I would have liked to do a pivot approach, but this seemed much more direct.

# Approach
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - really O(4n), but 4 doesn't matter

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - I think. Not 100% sure on this

# Code
```elixir []
defmodule Solution do
  @spec min_remove_to_make_valid(s :: String.t) :: String.t
  def min_remove_to_make_valid(s) do
    s
    |> String.graphemes
    |> process([], [], 0)
    |> List.flatten()
    |> Enum.reverse()
    |> Enum.join("")
  end
  @typep str_list :: list(String.t())

  @spec process(str_list(), str_list(), str_list(), non_neg_integer()) :: str_list()
  defp process([], [], [], _), do: []

  defp process(str, output, current, 0) when current != [] do
    output = insert(output, current)
    process(str, output, [], 0)
  end

  defp process([], output, current, idx) do
    current = 
    if idx > 0 do
        pop_opens(current, [], idx)
    else
      current
    end

    insert(output, current)
  end

  defp process(str, output, current, idx) do
    case hd(str) do
        "(" ->
            process(tl(str), output, ["(" | current], idx + 1)
        ")" when idx > 0 -> 
            current = [")" | current]
            process(tl(str), output, current, idx - 1)
        ")" -> 
            # ignore this character
            process(tl(str), output, [], 0)
        char when idx > 0 ->
            process(tl(str), output, [char | current], idx)
        char -> 
            process(tl(str), [char | output], [], 0)
    end
  end

  defp pop_opens(["(" | tl], hold, idx) do 
    if idx - 1 == 0 do
        [Enum.reverse(hold) | tl]
    else
        pop_opens(tl, hold, idx - 1)
    end
  end
  defp pop_opens([char | tl], hold, idx), do: pop_opens(tl, [char | hold], idx)

  defp insert(parent, child), do: [child | parent]

end
```