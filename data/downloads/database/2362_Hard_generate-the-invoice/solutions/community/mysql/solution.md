# MySQL: solution with in-code commentaries

**Author:** DanilXYZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-the-invoice/solutions/2954690/](https://leetcode.com/problems/generate-the-invoice/solutions/2954690/)

---

- Runtime: 962 ms\r
- Beats: 62.7%\r
# Code\r
```\r
# CTEs\r
WITH details_by_invoices AS (\r
    # Calculate total spendings for each row from `Purchases` table\r
    SELECT\r
        pu.invoice_id\r
        , pu.product_id\r
        , pu.quantity\r
        , pu.quantity * pr.price AS price\r
    FROM\r
        Purchases AS pu\r
            INNER JOIN Products AS pr\r
                ON pu.product_id = pr.product_id\r
)\r
, invoice_with_max_total AS (\r
    # Find `invoice_id` with max spendings and, in case of tie, with minimal `invoice_id`\r
    SELECT\r
        invoice_id\r
    FROM\r
        details_by_invoices\r
    GROUP BY\r
        invoice_id\r
    ORDER BY\r
        SUM(price) DESC\r
        , invoice_id ASC\r
    LIMIT 1\r
)\r
# Query's body\r
SELECT\r
    product_id\r
    , quantity\r
    , price\r
FROM\r
    details_by_invoices\r
WHERE\r
    invoice_id IN (\r
        SELECT\r
            invoice_id\r
        FROM\r
            invoice_with_max_total\r
    );\r
```