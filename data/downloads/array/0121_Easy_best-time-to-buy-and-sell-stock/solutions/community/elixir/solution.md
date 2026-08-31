# [Rust / Elixir] solution

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3226879/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3226879/)

---

# Rust
```rust
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut buy = prices[0];
        let mut ans = 0;
        for price in prices.into_iter().skip(1) {
            ans = ans.max(price - buy);
            buy = buy.min(price);
        }
        ans
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec max_profit(prices :: [integer]) :: integer
  def max_profit([head | prices]) do
    Enum.reduce(prices, {0, head}, fn x, {ans, buy} ->
      {max(ans, x - buy), min(buy, x)}
    end)
    |> elem(0)
  end
end
```