# Ruby O(N)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3869337/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/3869337/)

---


```ruby
# @param {Integer[]} prize_positions
# @param {Integer} k
# @return {Integer}
def maximize_win(prize_positions, k)
  # dp[idx] := max prize if one optimal segment is chosen among the first k prizes
  dp = Array.new(prize_positions.length + 1, 0)
  res, left = 0, 0
  for right in 0...prize_positions.length
    while prize_positions[right] - prize_positions[left] > k
      left += 1
    end
    dp[right + 1] = [dp[right], right - left + 1].max
    res = [res, right - left + 1 + dp[left]].max
  end
  res
end
```