# Recursive CTE with explanation.

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/friday-purchases-ii/solutions/6079564/](https://leetcode.com/problems/friday-purchases-ii/solutions/6079564/)

---

The hardest part is understanding how to get the weeks of the month as values 1-4. 

All_dates is a CTE that creates a table with every day in November 2023. The table contains the values from Nov 1,2,3...30. 

Once we have that table created we can then use the datepart function using the value 6 for fridays. We can also create a row_number to order the fridays from the first to the fourth friday in Nov of 2023.

Once we have the table containing all the fridays, the rest is just a straight forward group by from purchases where the purchase_date is a friday in the fridays table. 

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH all_dates 
AS 
(
    SELECT CAST('2023-11-01' AS DATE) AS curr_date
    UNION ALL
    SELECT DATEADD(DAY, 1, curr_date)
    FROM all_dates
    WHERE curr_date < '2023-11-30'
)
,fridays
as
(
SELECT curr_date
      ,row_number() over (order by DATEPART(WEEKDAY, curr_date)) rn
FROM all_dates
WHERE DATEPART(WEEKDAY, curr_date) = 6
)
SELECT rn week_of_month
      ,curr_date purchase_date
      ,coalesce(sum(amount_spend),0) total_amount
FROM fridays f
left join Purchases p
  on p.purchase_date = f.curr_date
group by curr_date, rn
order by curr_date

```