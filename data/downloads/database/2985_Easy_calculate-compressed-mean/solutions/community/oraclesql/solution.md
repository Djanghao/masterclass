# Average, convert sum to decimal first!

**Author:** Ante_
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-compressed-mean/solutions/4484189/](https://leetcode.com/problems/calculate-compressed-mean/solutions/4484189/)

---

# Code
```
SELECT 
    ROUND(
            SUM(item_count * order_occurrences) * 1.0 
            / 
            SUM(order_occurrences), 
            2
    ) average_items_per_order
FROM Orders;

```