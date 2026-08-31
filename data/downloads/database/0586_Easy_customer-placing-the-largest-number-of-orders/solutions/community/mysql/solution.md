# MYSQL || Database

**Author:** shreya_dhanta
**Votes:** 154
**Link:** [https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/1916054/](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/1916054/)

---

```
select customer_number from Orders group by customer_number order by count(customer_number) desc limit 1;

Explanation:
// First we need to select customer_number from Orders
// Then we need to group by the same column i.e customer_number 
// After that count the occurences of values in customer_number and then with the help of desc (descending) keyword I have converted it into descending order
// In the end I have used limit 1 so that only the max occurring element is shown in the output table


If this solution was helpful then do not forget to upvote :)