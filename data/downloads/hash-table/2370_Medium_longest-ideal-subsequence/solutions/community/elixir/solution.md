# Elixir - Bottom Up DP

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5069943/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5069943/)

---

# Intuition
As explained in the Editorial, we will build a DP table.
Each `dp[c]` will represent the longest subsequence we can build that ends with the letter `c`.

To do that, we will iterate on the characters `0 -> n-1` and for each one, check what was the best previous subsequence ending with a character that is in the range `(c-k)..(c+k)`. Then set the `dp[c]` to that previous subsequcne + 1.

# Approach
We use `Process` to store our table.
We `reduce` on `s`.
For each `c` of `s`, we set `dp[c]` = 1 + best of `dp[c-k]..d[c+k]`,

# Complexity
- Time complexity:
$$O(n)$$ 26 x n 

- Space complexity:
$$O(1)$$ Constant of 26

# Code
```
defmodule Solution do
  @spec longest_ideal_string(s :: String.t, k :: integer) :: integer
  def longest_ideal_string(s, k) do
    Task.async(fn ->
      s
      |> String.to_charlist()
      |> Enum.reduce(0, &longest(&1, &2, k))
    end)
    |> Task.await(:infinity)
  end

  defp longest(c, ans, k) do
    best_prev_ending = max(?a, c - k)..min(?z, c + k)
    |> Enum.reduce(0, fn prev_ending, best -> 
        Process.get(prev_ending, 0) |> max(best)
    end)
    
    dp_c = max(Process.get(c, 0), best_prev_ending + 1)
    Process.put(c, dp_c)
    max(ans, dp_c)
  end
end
```