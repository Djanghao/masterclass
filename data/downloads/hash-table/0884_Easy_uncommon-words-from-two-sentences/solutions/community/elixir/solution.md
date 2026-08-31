# [Elixir] Counting Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797274/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797274/)

---

![image.png](./images/0.png)


# Approach
Split both string to retrieve the words, merge two result arrays into one array. Then count each word by iterating over the array, put the count in hash table. Filter the hash table to only key with value equals to 1.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec count_words(s :: [String.t], map :: map()) :: map()
  defp count_words([], map), do: map
  defp count_words([h | t], map) do
    res = Map.fetch(map, h)
    count = if res == :error do
      0
    else
      {_, count} = res
      count
    end
    count_words(t, Map.put(map, h, count+1))
  end

  @spec uncommon_from_sentences(s1 :: String.t, s2 :: String.t) :: [String.t]
  def uncommon_from_sentences(s1, s2) do
    s1 = s1 |> String.split(" ")
    s2 = s2 |> String.split(" ")

    word_map = count_words(s1 ++ s2, %{})
    |> Map.filter(fn {_, v} -> v == 1 end)
    |> Enum.map(fn {k, v} -> k end)
  end
end
```