# Step-by-step detailed solution || Easy to understand || MySQL

**Author:** pmehra_be20
**Votes:** 247
**Link:** [https://leetcode.com/problems/monthly-transactions-i/solutions/3756098/](https://leetcode.com/problems/monthly-transactions-i/solutions/3756098/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A beginner friendly answer is written by following basic concepts step by step.

# Approach
<!-- Describe your approach to solving the problem. -->
Looking at the result table we write the basic select statement
SELECT ___ as month, country, __ as trans_count, __ as approved_count, ___ as trans_total_amount,___ as approved_total_amount
FROM Transactions

Now we form the solution column by column, starting from month.
As the month column contains only a part (year and month) from trans_date column in Transactions, we use SUBSTR() function to select a substring of trans_date starting from index 1 and going upto 7th index: SUBSTR(trans_date,1,7) as month.
We modify the select statement as
SELECT SUBSTR(trans_date,1,7) as month, country, __ as trans_count, __ as approved_count, ___ as trans_total_amount,___ as approved_total_amount
FROM Transactions

Now, we go for trans_count column (as country column is as it is taken from table Transactions), looking at the result table, we need to count the number of transections per month in a country so, we count transaction ids and GROUP them by month and country.
The code will look like this now
SELECT SUBSTR(trans_date,1,7) as month, country, count(id) as trans_count, __ as approved_count, ___ as trans_total_amount,___ as approved_total_amount
FROM Transactions
GROUP BY month, country

Now for next approved_count column, we need to check if the state of transection is "approved" if yes then we count else we don't. For this here we used CASE statement along with SUM() function as follows:
SUM(CASE WHEN state = 'approved' then 1 else 0 END).
Lastly, modify the select statement by adding: 
SUM(CASE WHEN state = 'approved' then 1 else 0 END) as approved_count

Now for trans_total_amount, as we have already grouped transactions based on month and country so, we can directly write trans_total_amount column as SUM(amount). 
Now updated select statement will look like this:
SELECT  SUBSTR(trans_date,1,7) as month, country, count(id) as trans_count, SUM(CASE WHEN state = 'approved' then 1 else 0 END) as approved_count, SUM(amount) as trans_total_amount, ___ as approved_total_amount
FROM Transactions
GROUP BY month, country

As we wrote the condition for approved_count column similarly, we 
can write for approved_total_amount. The only difference is instead of adding 1, in case the state = 'approved', we add transaction amount: SUM(CASE WHEN state = 'approved' then amount else 0 END).

Thus the final code becomes
SELECT  SUBSTR(trans_date,1,7) as month, country, count(id) as trans_count, SUM(CASE WHEN state = 'approved' then 1 else 0 END) as approved_count, SUM(amount) as trans_total_amount, SUM(CASE WHEN state = 'approved' then amount else 0 END) as approved_total_amount
FROM Transactions
GROUP BY month, country

# Complexity
- Runtime: 927 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Beats: 92.67%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Write your MySQL query statement below
SELECT  SUBSTR(trans_date,1,7) as month, country, count(id) as trans_count, SUM(CASE WHEN state = 'approved' then 1 else 0 END) as approved_count, SUM(amount) as trans_total_amount, SUM(CASE WHEN state = 'approved' then amount else 0 END) as approved_total_amount
FROM Transactions
GROUP BY month, country
```
If you like my explanation kindly upvote for me :)