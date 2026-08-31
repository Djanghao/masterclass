# Clean and Simple!

**Author:** domthedeveloper
**Votes:** 3
**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solutions/1889816/](https://leetcode.com/problems/sellers-with-no-sales/solutions/1889816/)

---

**Solution**:
```
SELECT seller_name FROM Seller
WHERE seller_id NOT IN
    (
        SELECT DISTINCT seller_id FROM Orders
        WHERE YEAR(sale_date) = 2020
    )
ORDER BY seller_name
```