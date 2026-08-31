# 🌟 Simplified PostgreSQL solution with USING

**Author:** MathieuSoysal
**Votes:** 4
**Link:** [https://leetcode.com/problems/product-sales-analysis-i/solutions/4991092/](https://leetcode.com/problems/product-sales-analysis-i/solutions/4991092/)

---

# Code
```
SELECT product_name,
        year,
        price
FROM Sales
INNER JOIN Product
USING (product_id);
```

If it was useful don't hesitate to upvote \uD83C\uDF20 Or keep it in favorite \uD83C\uDF1F
![Upvote invitation](./images/0.png)