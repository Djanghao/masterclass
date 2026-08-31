# Elixir solution with sorting

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/3948706/](https://leetcode.com/problems/reorganize-string/solutions/3948706/)

---

# Approach
1. Find the frequencies of occurence of the chars.
2. Return "" if there exists char with `frequency > (n + 1) / 2`, where `n` is the string length.
2. Sort the characters by the frequency of occurence.
3. Split to 2 char lists.
4. Zip up the 2 lists into 1 and then convert back to string.

Note: Sorting by frequency ensures that, when there exists char with `frequency == (n + 1) / 2`, it will only occupy the right side of splited lists. Otherwise some of them can become adjacent after zipping.

# Code
```
defmodule Solution do
  @spec reorganize_string(s :: String.t) :: String.t
  def reorganize_string(s) do
    n = String.length(s)
    list = String.to_charlist(s)
    freq = Enum.frequencies(list)

    if (Map.values(freq) |> Enum.max()) * 2 > n + 1 do
      ""
    else
      Enum.sort_by(list, &({Map.get(freq, &1), &1}))
      |> Enum.split(div(n, 2))
      |> zip_lists([])
      |> to_string()
    end
  end

  defp zip_lists({[], []}, ans), do: ans
  defp zip_lists({[], [ch2]}, ans), do: [ch2 | ans]
  defp zip_lists({[ch1 | list1], [ch2 | list2]}, ans) do
    zip_lists({list1, list2}, [ch1, ch2 | ans])
  end
end
```