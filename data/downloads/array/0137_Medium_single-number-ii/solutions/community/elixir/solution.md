# Easy solution with Enum.module with O(n) both time and mem

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/5198131/](https://leetcode.com/problems/single-number-ii/solutions/5198131/)

---

# Intuition
Easy with elixir's Enum module

# Approach
``Enum.frequencies`` gives a map where value is the 
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

with 4, 7 and 13 being the length of the input string (`n`)
```
Name           ips        average  deviation         median         99th %
4           5.38 M      185.85 ns \xB115562.47%         150 ns         310 ns
7           4.12 M      242.64 ns  \xB19224.31%         210 ns         400 ns
13          2.29 M      437.00 ns  \xB16571.42%         360 ns         630 ns

Comparison: 
4           5.38 M
7           4.12 M - 1.31x slower +56.79 ns
13          2.29 M - 2.35x slower +251.15 ns

Memory usage statistics:

Name    Memory usage
4              264 B
7              472 B - 1.79x memory usage +208 B
13            1064 B - 4.03x memory usage +800 B
```

# Code
```
defmodule Solution do
  def single_number(nums) do
    nums
    |> Enum.frequencies()
    |> Enum.to_list()
    |> find_single_number()
  end

  defp find_single_number([{k, 1} | _]), do: k
  defp find_single_number([_ | rest]), do: find_single_number(rest)
end
```