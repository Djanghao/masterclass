# My Elixir Solution

**Author:** dadinho
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/2669929/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/2669929/)

---

```elixir
defmodule Solution do
    @spec length_of_longest_substring_two_distinct(s :: String.t()) :: integer
    def length_of_longest_substring_two_distinct(s) do
    %{sub_string: ss, max_length: ml} =
      s
      |> String.graphemes()
      |> Enum.reduce(%{previous_letter: nil, last_latter: nil, sub_string: "", max_length: 0}, fn
        x, %{previous_letter: nil, last_latter: nil} = acc ->
          %{acc | previous_letter: x, last_latter: x, sub_string: x}

        x, %{last_latter: x} = acc ->
          %{acc | sub_string: acc.sub_string <> x}

        x, %{last_latter: y, previous_letter: y} = acc when x != y ->
          %{acc | previous_letter: y, last_latter: x, sub_string: acc.sub_string <> x}

        x, %{last_latter: y, previous_letter: x} = acc when x != y ->
          %{acc | previous_letter: y, last_latter: x, sub_string: acc.sub_string <> x}

        x, %{last_latter: y, previous_letter: z, sub_string: ss, max_length: ml} = acc when x != z and x != y ->
          [[base_sub_str] | _] = Regex.scan(~r/#{y}*$/, ss)

          case String.length(ss) do
            value when value > ml ->
              %{acc | previous_letter: y, last_latter: x, sub_string: base_sub_str <> x, max_length: value}

            _ ->
              %{acc | previous_letter: y, last_latter: x, sub_string: base_sub_str <> x}
          end
      end)

    [String.length(ss), ml]
    |> Enum.max()
    end
end
```