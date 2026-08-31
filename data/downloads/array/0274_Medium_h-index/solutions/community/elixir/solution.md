# Beats 100/100 with recursion, break early

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index/solutions/5236004/](https://leetcode.com/problems/h-index/solutions/5236004/)

---

# Intuition
Easy in $$O(n^2)$$ time, maybe break up early and do some math to make it more eff.

# Approach
Once sorted in asc. order, we can end iterating early, once we found an element that is equal to the remaining elements (counting the current element to the remainings).
When the element is lesser than the amount of remaining elements, we go on, increasing the index.
When element is greater, we take the greater value from remaining elements and the current calculated, intermediate h_index.

# Complexity
- Time complexity:
expected/average $$O(log(n))$$, worst case near $$O(n)$$

- Space complexity:
$$O(n)$$

with worst case inputs

```elixir
citations_1 = [1]
citations_2 = [1, 2]
citations_4 = Enum.concat(citations_2, citations_2)
citations_8 = Enum.concat(citations_4, citations_4)
citations_16 = Enum.concat(citations_8, citations_8)
citations_32 = Enum.concat(citations_16, citations_16)
citations_64 = Enum.concat(citations_32, citations_32)
```

```bash
Name                   ips        average  deviation         median         99th %
citations_1        16.70 M       59.88 ns \xB137966.02%          40 ns          80 ns
citations_2        14.46 M       69.15 ns \xB133618.63%          50 ns          90 ns
citations_4         7.77 M      128.63 ns \xB129749.64%          90 ns         150 ns
citations_8         5.44 M      183.85 ns \xB120651.25%         130 ns         320 ns
citations_16        3.32 M      301.06 ns \xB110644.33%         240 ns         440 ns
citations_32        1.47 M      678.91 ns  \xB14854.12%         581 ns         940 ns
citations_64        0.78 M     1279.82 ns  \xB11195.29%        1170 ns        1930 ns

Comparison: 
citations_1        16.70 M
citations_2        14.46 M - 1.15x slower +9.27 ns
citations_4         7.77 M - 2.15x slower +68.75 ns
citations_8         5.44 M - 3.07x slower +123.96 ns
citations_16        3.32 M - 5.03x slower +241.18 ns
citations_32        1.47 M - 11.34x slower +619.03 ns
citations_64        0.78 M - 21.37x slower +1219.93 ns

Memory usage statistics:

Name            Memory usage
citations_1              0 B
citations_2              0 B - 1.00x memory usage +0 B
citations_4            160 B - \u221E x memory usage +160 B
citations_8            304 B - \u221E x memory usage +304 B
citations_16           576 B - \u221E x memory usage +576 B
citations_32          2192 B - \u221E x memory usage +2192 B
citations_64          4384 B - \u221E x memory usage +4384 B
```

# Code
```
defmodule Solution do
  @spec h_index(citations :: [integer]) :: integer
  def h_index(citations) do
    calc(Enum.sort(citations), 0, length(citations), 0)
  end

  defp calc([], _idx, _length, h_index), do: h_index
  defp calc([cit | _citations], idx, length, _h_index) when cit == length - idx, do: cit

  defp calc([cit | citations], idx, length, h_index) when length - idx > cit do
    calc(citations, idx + 1, length, h_index)
  end

  defp calc([_cit | citations], idx, length, h_index) do
    calc(citations, idx + 1, length, max(length - idx, h_index))
  end
end
```