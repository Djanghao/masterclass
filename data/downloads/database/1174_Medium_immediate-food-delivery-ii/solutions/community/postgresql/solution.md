# "Beats 100.00% of users with PostgreSQL"

**Author:** AhmedHassan1
**Votes:** 9
**Link:** [https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5270043/](https://leetcode.com/problems/immediate-food-delivery-ii/solutions/5270043/)

---

# Complexity
- Time complexity:
500 ms

- Space complexity:
0.00 MB
# Code
```
SELECT ROUND(AVG(CASE WHEN order_date = customer_pref_delivery_date THEN 1
                ELSE 0 END)*100, 2) AS immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (
                SELECT customer_id,
                    MIN(order_date)
                    FROM Delivery
                    GROUP BY customer_id
)
```