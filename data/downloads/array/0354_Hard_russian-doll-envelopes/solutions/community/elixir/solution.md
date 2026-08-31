# Elixir sort then longest increasing sublist for height

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/2085176/](https://leetcode.com/problems/russian-doll-envelopes/solutions/2085176/)

---

This is fast enough to not hit TLE, but I think it is at least O(n^2). I don't know the details of the `Enum.sort_by/3` function. I think it also depends upon the length of the final sublist because I'm potentially traversing that length for each out of order height.
```elixir
  def max_envelopes(envelopes) do
    envelopes
    |> Enum.map(&(List.to_tuple(&1)))
    |> Enum.sort_by(&{elem(&1, 0), -1 * elem(&1, 1)}) # sorts by first item ascending order then second item descending b/c second item mult by -1
    |> Enum.map(&elem(&1, 1)) # since widths are sorted only need longest increasing subpath for heights
    |> l_i_s(0, Map.new())
  end
  
  def l_i_s([], ndx, dp), do: ndx
  def l_i_s([h | hts], 0, %{}), do: l_i_s(hts, 1, %{0 => h})
  def l_i_s([h | hts], i, dp) do
    if dp[i - 1] < h do
      # in this case the current height h is greater than the last used ht and can be appended
      l_i_s(hts, i + 1, Map.put(dp, i, h))
    else
      # in this case the current height h is less than the last used ht and we must backtrack to the
      # last used ht that is greater than h
      replace =
        0..i
        |> Enum.find(fn ndx -> dp[ndx] >= h end)

      dp = %{dp | replace => h}
      # b/c we did a replace rather than append the length of the series (tracked by i) does not change for recursive call
      l_i_s(hts, i, dp)
    end
  end
  ```