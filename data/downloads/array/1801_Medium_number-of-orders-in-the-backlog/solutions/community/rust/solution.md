# Rust solution with 2 BinaryHeaps

**Author:** io80686
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/4150172/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/4150172/)

---

# Code
```
use std::{cmp::Reverse, collections::BinaryHeap};

const M: i64 = 1000000007;

impl Solution {
    pub fn get_number_of_backlog_orders(orders: Vec<Vec<i32>>) -> i32 {
        let mut buy = BinaryHeap::new();
        let mut sell = BinaryHeap::new();
        let mut ret = 0;
        for mut order in orders {
            ret = (ret + order[1] as i64) % M;
            let order_price = order[0];
            let mut order_amount = order[1] as i64;
            let is_buy = order[2] == 0;

            if is_buy {
                while match (order_amount > 0, sell.peek()) {
                    (true, Some(&(Reverse(price), _))) => price <= order_price,
                    _ => false,
                } {
                    if let Some((Reverse(mut price), mut amount)) = sell.pop() {
                        let num = order_amount.min(amount);
                        amount -= num;
                        order_amount -= num;
                        if amount > 0 {
                            sell.push((Reverse(price), amount));
                        }
                        ret = (ret - (num << 1) + M) % M;
                    }
                }

                if order_amount > 0 {
                    buy.push((order_price, order_amount));
                }
            } else {
                while match (order_amount > 0, buy.peek()) {
                    (true, Some(&(price, _))) => price >= order_price,
                    _ => false,
                } {
                    if let Some((mut price, mut amount)) = buy.pop() {
                        let num = order_amount.min(amount);
                        amount -= num;
                        order_amount -= num;
                        if amount > 0 {
                            buy.push((price, amount));
                        }

                        ret = (ret - (num << 1) + M) % M;
                    }
                }
                if order_amount > 0 {
                    sell.push((Reverse(order_price), order_amount));
                }
            }
        }

        ret as i32
    }
}
```