# 95 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/3319233/](https://leetcode.com/problems/stone-game-iv/solutions/3319233/)

---

```ruby
@dp = Array.new (z = 100_001), false
for i in 0...z
    next if @dp[i]
    k = 1
    while (s = i + k * k) < z
        @dp[s] = true
        k += 1
    end
end

def winner_square_game(n) = @dp[n]
```