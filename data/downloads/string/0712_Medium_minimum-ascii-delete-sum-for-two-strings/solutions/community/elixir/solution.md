# [Rust / Elixir] LCS approach

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3266684/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3266684/)

---

# Approach
Similar to the Longest Common Subsequence algorithm, but instead of finding longest subsequence length, largest ASCII value sum is wanted.

# Complexity
- Time complexity: O(m * n)
- Space complexity: O(m)
Where m is length of the shorter string among s1 and s2, n is length of another string.

# Code
```Rust []
impl Solution {
    pub fn minimum_delete_sum(mut s1: String, mut s2: String) -> i32 {
        if s1.len() < s2.len() {
            std::mem::swap(&mut s1, &mut s2);
        }
        let mut dp = vec![0; s2.len() + 1];
        let mut dp2 = vec![0; s2.len() + 1];
        for b1 in s1.bytes() {
            for (i, b2) in s2.bytes().enumerate() {
                dp2[i + 1] = dp2[i].max(dp[i + 1]);
                if b1 == b2 {
                    dp2[i + 1] = dp2[i + 1].max(dp[i] + b1 as i32);
                }
            }
            std::mem::swap(&mut dp, &mut dp2);
        }
        s1.bytes()
            .chain(s2.bytes())
            .map(|b| b as i32)
            .sum::<i32>()
        - dp[s2.len()] * 2
    }
}
```
```Elixir []
defmodule Solution do
  @spec minimum_delete_sum(s1 :: String.t, s2 :: String.t) :: integer
  def minimum_delete_sum(s1, s2) do
    if String.length(s1) < String.length(s2) do
      minimum_delete_sum(s2, s1)
    else
      list1 = String.to_charlist(s1)
      list2 = String.to_charlist(s2)
      common =
        lcs(list1, list2)
        |> Map.get(String.length(s2) - 1)
      Enum.sum(list1) + Enum.sum(list2) - common * 2
    end
  end

  defp lcs(list1, list2) do
    Enum.reduce(list1, %{}, fn ch1, dp ->
      Enum.with_index(list2)
      |> Enum.reduce(%{}, fn {ch2, i}, dp2 ->
        Map.get(dp2, i - 1, 0)
        |> max(Map.get(dp, i, 0))
        |> max(if ch1 == ch2 do
          Map.get(dp, i - 1, 0) + ch1
        else
          0
        end)
        |> then(&(Map.put(dp2, i, &1)))
      end)
    end)
  end
end
```