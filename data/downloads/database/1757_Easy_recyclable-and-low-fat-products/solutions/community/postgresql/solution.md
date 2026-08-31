# 🔥Easy Solution in PosgreSQL || Detailed explanation🔥

**Author:** CppExplorer
**Votes:** 6
**Link:** [https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/4975894/](https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/4975894/)

---

# Explanation
```
SELECT product_id
```
- This part specifies that we want to retrieve the `product_id` column from the `Products` table.

```
FROM Products
```
- This specifies the table from which we want to retrieve the data, in this case, the `Products` table.

```
WHERE low_fats = 'Y' AND recyclable = 'Y'
```
- This is the filtering condition. It specifies that we want to retrieve rows where both the `low_fats` column is `'Y'` (indicating the product is low fat) and the recyclable column is `'Y'` (indicating the product is recyclable).
- The `AND` operator ensures that both conditions must be true for a row to be included in the result set.

---



# Code
```
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```
![meme.jpg](./images/0.jpeg)
