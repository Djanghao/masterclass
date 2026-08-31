# Full Explanation unlike any others where they only provide the solution

**Author:** Sarah-2002
**Votes:** 1723
**Link:** [https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/3500258/](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/3500258/)

---

# Intuition
As a beginner  with Relational SQL --> I'll try my best explaning it in simple terms so that other new beginners would benefit and understand as well.

# ** What do we need to find? **
Customers that visited the Mall but didn't do any transactions and how many times have they  did that .
Let's Break it down:
- We have 2 Tables : rapidly think of joins
- Transactions is NULL : that's a condition ! So we need a "WHERE"
- We'll also be using a count function which I'll be going to  explain in detail

# Approach
1- Select the customer id from the visits table : Because we need to retrive the customers 

2- Use the Count function  and give it a name / name the variable whatever term works with you ... BUT what is the COUNT function though and why do we use it?

# COUNT Function
 - It helps us in counting the number of rows . **In our case we need to count the number of visits as the question clearly states.**
 
 - We **start at the top** because we want all the rows that meet our condition , the condition is that in the where statment 
 
 - We then  **group in the end** , we'll get into that later just keep reading .

3- We then **use Left Join** to Join our 2 tables , but on what do we join?
  In our case ,  we're joining  on the visit id which is common  !
4- Now after we have  joined our table , we can put the condition in a WHERE clause. 
*PS: The condition always comes at the end after we join and write our query*

5-Finally , we have a **group by **clause . You might be wondering why do we need that?

Let's explore why : 
# GROUP BY
- We usually use group by with an aggregate function like :COUNT, SUM, AVG, MAX or MIN etc..
-  What it basically does is that it groups rows sharing the same values in a somehow specified column or columns. 
- In our case , we're **using GROUP BY** to group the results by the customer_id, which means that we will get one row for each unique customer_id in the Visits table. We are then using the COUNT function to count the number of visits made by each customer who did not make any transactions.

# A Question you might be asking yourself , after you have just finished reading my explanation :

> I have understood the join and the conditon clause (where) 
 But I don't see the significance of using **count** and also **group** ?

**Let me answer that :**

By grouping the results by customer_id, we are telling the database to group all the rows that have the same customer_id together. This way, we can apply the COUNT function to each group separately, which gives us the number of visits made by each customer.

If we didn't group the results, the COUNT function would simply count the number of rows in the entire table that match the condition in the WHERE clause, without distinguishing between different customers.




Now that's it :) , hope my explanation was clear enough !

# Code
```
# Write your MySQL query statement below

SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
from Visits v 
LEFT JOIN Transactions t 
ON v.visit_id = t.visit_id  
WHERE t.transaction_id IS NULL 
GROUP BY v.customer_id; 


#UPDATE DEC 1ST : we take the t.amount as null
SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans 
from Visits v 
LEFT JOIN Transactions t 
ON v.visit_id = t.visit_id  
WHERE t.amount IS NULL 
GROUP BY v.customer_id; 
```