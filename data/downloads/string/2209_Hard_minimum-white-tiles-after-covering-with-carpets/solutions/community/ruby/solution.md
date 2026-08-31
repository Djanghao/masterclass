# Ruby 100%

**Author:** DanielcoderX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/3528393/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/3528393/)

---


# Code
```
def minimum_white_tiles(floor, num_carpets, carpet_len)
  n = floor.length
  return 0 if carpet_len * num_carpets >= n

  floor_list = floor.chars.map { |c| c == '1' ? 1 : 0 }
  dp = Array.new(num_carpets) { Array.new(n, 0) }

  (carpet_len...n).each do |i|
    dp[0][i] = [floor_list[i] + dp[0][i - 1], floor_list[0..(i - carpet_len)].sum].min
  end

  (1...num_carpets).each do |j|
    (carpet_len * j...n).each do |i|
      dp[j][i] = [floor_list[i] + dp[j][i - 1], dp[j - 1][i - carpet_len]].min
    end
  end

  dp[-1][-1]
end
```