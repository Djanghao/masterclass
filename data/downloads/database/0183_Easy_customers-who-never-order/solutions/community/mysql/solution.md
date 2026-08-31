# ||TO THE POINT SOLUTION || WITHOUT JOIN ||

**Author:** ujjwalvarma6948
**Votes:** 402
**Link:** [https://leetcode.com/problems/customers-who-never-order/solutions/3202156/](https://leetcode.com/problems/customers-who-never-order/solutions/3202156/)

---

**Please Upvote if you like the approach**
![meme.gif](./images/0.gif)

# Code
```
SELECT name as Customers
from Customers
where id not in (
    select customerId
    from Orders
);
```