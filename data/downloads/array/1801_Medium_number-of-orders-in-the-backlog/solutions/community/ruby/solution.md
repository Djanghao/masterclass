# Ruby - Keep sorted queues for buy and sell orders.

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/1119826/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/1119826/)

---

Keep buy queue sorted by price descending.
Keep sell queue sorted by price ascending.
Buy by the best price (minimum price - first in the sell queue) while can.
Sell by the best price (maximum price - first in the buy queue) while can.

```ruby
def get_number_of_backlog_orders(orders)
  bq = []; sq = [] # buy queue and sell queue
  for price, amount, order_type in orders
    if order_type == 0 # buy
      amount -= sq.shift[1] while amount > 0 && sq.any? && sq[0][0] <= price && sq[0][1] <= amount
      if sq.any? && sq[0][0] <= price
        sq[0][1] -= amount
      else
        bq.insert(bq.bsearch_index { |p,| p <= price } || bq.size, [price, amount]) if amount > 0
      end
    else # sell
      amount -= bq.shift[1] while amount > 0 && bq.any? && bq[0][0] >= price && bq[0][1] <= amount
      if bq.any? && bq[0][0] >= price
        bq[0][1] -= amount
      else
        sq.insert(sq.bsearch_index { |p,| p >= price } || sq.size, [price, amount]) if amount > 0
      end
    end
  end
  (bq.sum(&:last) + sq.sum(&:last)) % 1000000007
end
```