# Easy solution

**Author:** leo66six
**Votes:** 3
**Link:** [https://leetcode.com/problems/warehouse-manager/solutions/2560963/](https://leetcode.com/problems/warehouse-manager/solutions/2560963/)

---

SELECT w.name AS warehouse_name, SUM(w.units * p.Width * p.Length * p.Height) AS volume
FROM Warehouse AS w
LEFT JOIN Products AS p
USING (product_id)
GROUP BY w.name