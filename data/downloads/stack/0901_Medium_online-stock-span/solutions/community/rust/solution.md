# [Rust] monotone stack, O(|spans|), readable & idiomatic.

**Author:** marccarre
**Votes:** 6
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/640425/](https://leetcode.com/problems/online-stock-span/solutions/640425/)

---

```rust
struct Span {
    price: i32,
    days: i32,
}

struct StockSpanner {
    spans: Vec<Span>,
}

impl StockSpanner {
    fn new() -> Self {
        StockSpanner { spans: Vec::new() }
    }
    
    fn next(&mut self, price: i32) -> i32 {
        let mut days = 1;
        while let Some(span) = self.spans.last() {
            if span.price <= price {
                days += span.days;
                self.spans.pop();
            } else {
                break;
            }
        }
        self.spans.push(Span{ price, days });
        days
    }
}
```
