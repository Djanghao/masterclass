# rust multiplication

**Author:** akaisiro
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062980/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062980/)

---

```rust
fn minimum_lines(mut stock_prices: Vec<Vec<i32>>) -> i32 {
    if stock_prices.len() == 1 {
        return 0;
    }
    if stock_prices.len() == 2 {
        return 1;
    }
    stock_prices.sort_unstable();
    let mut res = 1;

    for i in stock_prices.windows(3) {
        let left = (i[1][1] - i[0][1]) as i64 * (i[2][0] - i[1][0]) as i64;
        let right = (i[1][0] - i[0][0]) as i64 * (i[2][1] - i[1][1]) as i64;
        if left != right {
            res += 1;
        }
    }
    res
}
```