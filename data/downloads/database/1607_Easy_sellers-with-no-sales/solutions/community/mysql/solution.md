# [MySQL] LEFT JOIN better than WHERE NOT IN subquery

**Author:** OhAanika
**Votes:** 33
**Link:** [https://leetcode.com/problems/sellers-with-no-sales/solutions/1977804/](https://leetcode.com/problems/sellers-with-no-sales/solutions/1977804/)

---

The first solution may be more intuitive but I've been told the second solution generally performs better when there's a lot more data. I believe for the first solution, this is because for every `seller_id` in the `Seller` table, it will check every row in the `Orders` table, to ensure `Seller.seller_id != subquery.seller_id`.

Moreover, if for any reason the `seller_id` is null in the `Orders` table, the first solution would output 0 rows. When it ensures that `Seller.seller_id != subquery.seller_id` and `subquery.seller_id` is null at any point, `S.seller_id != NULL` returns `NULL` or `false`. In this case, we could also replace `NOT IN` with `NOT EXISTS`. The `seller_id`s may never be null in the `Orders` table, as also suggested by the passing test cases, but the question description does not guarantee it.

```
SELECT seller_name
FROM Seller
WHERE seller_id NOT IN (
    SELECT seller_id
    FROM Orders
    WHERE YEAR(sale_date) = '2020'
)
ORDER BY seller_name
```

```
SELECT S.seller_name
FROM Seller AS S
LEFT JOIN Orders AS O
ON S.seller_id = O.seller_id
AND YEAR(sale_date) = '2020'
WHERE O.seller_id IS NULL
ORDER BY seller_name
```

Regardless, the first solution helped me come up with the second solution. Here's my thought process:
1. We start with the `Seller` table. This table is guaranteed to have ALL `seller_id`s, whereas the `Orders` table will not have a `seller_id` if let's say that seller never made ANY sales. 
2. We need to know the sellers who _did not_ make any sales in `2020`. The `Orders` table has information on who _did_ make a sale in `2020`. So intuitively, as seen in the first solution, we can get the `seller_id`s who did make a sale in `2020` as a subquery and then check which sellers are not in that list via `WHERE ... NOT IN (subquery)`. 
3. We want to translate this `WHERE ... NOT IN` solution into a `JOIN` solution. Naturally, we will join the `Seller` and `Order` tables on `seller_id`. We choose `LEFT JOIN` from `Seller` to `Order`, so that we do not lose any seller that is not in the `Order` table. You see here is the trick! What happens to the sellers that are not in the `Order` table when the two tables are joined? Their `O.seller_id` is null. So if we join `ON S.seller_id = O.seller_id AND YEAR(sale_date) = '2020'`, `WHERE O.seller_id IS NULL` will give us the sellers that are in the `Seller` table that did not make any sales in `2020`. 
4. Let us not forget to `ORDER BY seller_name`!




