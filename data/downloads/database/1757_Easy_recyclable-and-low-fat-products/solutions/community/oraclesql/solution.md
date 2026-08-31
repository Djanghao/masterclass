# Answer in all three SQL variants | MS SQL | Oracle PL/SQL | MySQL

**Author:** younus_baig
**Votes:** 20
**Link:** [https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/3539937/](https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/3539937/)

---

**Do not be sursprised to see the same code for all three SQL variants. Yes, they are all correct.**

This is a simple question that uses the basic operations of SQL.
1. **SELECT**
2. **FROM**
3. **WHERE**
4. **AND**

## More information on each is provided at the end for those who are learning.


# Code
```MS_SQL []
SELECT product_id
FROM Products
WHERE low_fats = 'Y' and recyclable = 'Y';
```
```Oracle []
SELECT product_id
FROM Products
WHERE low_fats = 'Y' and recyclable = 'Y';
```
```MySQL []
SELECT product_id
FROM Products
WHERE low_fats = 'Y' and recyclable = 'Y';
```


# SELECT
 This command is used to select data from a database. It specifies the columns that you want to retrieve from one or more tables.

# FROM
 This command is used to specify the table or tables from which you want to retrieve data.

# WHERE
 This command is used to filter the data that you want to retrieve based on one or more conditions.

# AND
 This command is used to combine multiple conditions in a WHERE clause. It returns true if all the conditions are true.

### Please upvote, it motivates me
