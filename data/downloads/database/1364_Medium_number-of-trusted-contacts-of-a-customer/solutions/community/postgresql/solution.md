# WITH OUT CTE

**Author:** XYZ11111111111
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/6139442/](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/6139442/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT
    invoice_id,
    c.customer_name,
    price,
    COUNT(DISTINCT co.contact_name) AS contacts_cnt,
    COUNT(CASE WHEN contact_email IN (SELECT email FROM customers) THEN 1 END) AS trusted_contacts_cnt
FROM invoices i
LEFT JOIN customers c
ON i.user_id = c.customer_id
LEFT JOIN contacts co
ON c.customer_id = co.user_id
GROUP BY 1 ,2 ,3
ORDER BY 1

```