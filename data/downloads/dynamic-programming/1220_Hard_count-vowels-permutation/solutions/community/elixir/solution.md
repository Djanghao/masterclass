# ...

**Author:** hanaBa
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/4924281/](https://leetcode.com/problems/count-vowels-permutation/solutions/4924281/)

---


# Code
```
defmodule Solution do
    @spec count_vowel_permutation(n :: integer) :: integer
    def count_vowel_permutation(n) do
        [{"e", 1}, {"a", 1}, {"i", 1}, {"o", 1}, {"u", 1}]
        |> build_word(1, n)
        |> rem(1000000007)
    end

    defp build_word(list, length, n) when length < n do
        list 
        |> Enum.map(&replce_char_in_list/1)
        |> List.flatten
        |> Enum.group_by(fn {letter, count} -> letter end)
        |> Enum.map(fn {letter, list} -> {letter, sum(list)} end )
        |> build_word(length + 1, n)
    end
    defp build_word(list, _length, _n), do: sum(list)

    defp replce_char_in_list({"a", count}), do: [{"e", count}]
    defp replce_char_in_list({"e", count}), do: [{"a", count}, {"i", count}]
    defp replce_char_in_list({"i", count}), do: [{"e", count}, {"a", count}, {"o", count}, {"u", count}]
    defp replce_char_in_list({"o", count}), do: [{"i", count}, {"u", count}]
    defp replce_char_in_list({"u", count}), do: [{"a", count}]
  
    defp sum(list), do: sum(0, list)
    defp sum(acc, []), do: acc
    defp sum(acc, [{_, count} | tail]), do: sum(acc + count, tail)
end
```