# Minimum # steps to make anagram

**Author:** user4288EA
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4560650/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4560650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The solution will be the letter count for the target s minus the number of matching letters found in t.

# Approach
<!-- Describe your approach to solving the problem. -->
Count occurences of each letter in s.
Subtract from that the occurances found in t.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where n is the number of unique characters.

Not 100% sure, but seems the space complexity is a function of the size of the alphabet. i.e. if s contains 26 letters, the map used to count frequencies will contain 26 entries comprising of a character and the count.

# Code
```
defmodule Solution do
  @spec min_steps(s :: String.t, t :: String.t) :: integer
  def min_steps(s, t) do
    s_counts = 
        s 
        |> String.graphemes 
        |> Enum.reduce(%{}, &inc_count/2)

    t
    |> String.graphemes
    |> Enum.reduce(s_counts, &dec_count/2)
    |> Enum.reduce(0, &total/2)
  end

  defp inc_count(char, map), do: Map.put(map, char, (map[char] || 0) + 1)

  defp dec_count(char, map) do
    case map[char] do
        nil -> map
        0 -> Map.delete(map, char)
        count -> Map.put(map, char, count - 1)
    end
  end

  defp total({char, count}, total), do: total + count
end
```