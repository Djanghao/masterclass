# Idiomatic Elixir Solution

**Author:** ghostdsb
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5025303/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5025303/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Pattern Matching

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_latest_time(s :: String.t) :: String.t
  def find_latest_time(s) do
    s
    |> String.split(":")
    |> Enum.with_index()
    |> Enum.map(fn {tt, idx} -> tt |> String.codepoints |> match_t(idx) end)
    |> Enum.join(":")
  end

  def match_t(["0","?"], 0), do: "09"
  def match_t(["1","?"], 0), do: "11"
  def match_t(["?","?"], 0), do: "11"
  def match_t(["?",d], 0) when d == "0" or d == "1", do: "1#{d}"
  def match_t(["?",d], 0), do: "0#{d}"
  def match_t(h, 0), do: h |> Enum.join()

  def match_t(["?", "?"], 1), do: "59"
  def match_t(["?", d], 1), do: "5#{d}"
  def match_t([d, "?"], 1), do: "#{d}9" 
  def match_t(s, 1), do: s |> Enum.join()
end
```