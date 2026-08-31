# Tricky solution with two CTEs and a DENSE_RANK window function

**Author:** engineeringanalyst
**Votes:** 2
**Link:** [https://leetcode.com/problems/market-analysis-iii/solutions/4243875/](https://leetcode.com/problems/market-analysis-iii/solutions/4243875/)

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
```
# Write your MySQL query statement below
WITH Sellers AS
(
    SELECT
        U.seller_id,
        COUNT(DISTINCT I.item_id) AS num_items
    FROM Users U
    LEFT JOIN Orders O ON U.seller_id = O.seller_id
    LEFT JOIN Items I ON O.item_id = I.item_id
    WHERE U.favorite_brand != I.item_brand
    GROUP BY U.seller_id
),
RankNums AS
(
    SELECT
        *,
        DENSE_RANK() OVER(ORDER BY num_items DESC) AS rank_num
    FROM Sellers
)
SELECT
    seller_id,
    num_items
FROM RankNums
WHERE rank_num = 1
ORDER BY seller_id;
```