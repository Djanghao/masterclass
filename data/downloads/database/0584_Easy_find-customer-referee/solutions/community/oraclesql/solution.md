# Why do we have to explitcitly add is NULL condition?

**Author:** Lil_ToeTurtle
**Votes:** 36
**Link:** [https://leetcode.com/problems/find-customer-referee/solutions/3634049/](https://leetcode.com/problems/find-customer-referee/solutions/3634049/)

---


```
select name from Customer where referee_id!=2 or referee_id is null
```

I have explicitly added the checking is because, in Oracle, null values are not implicitly handled.

This can be easily solved by using COALESCE function.

Here is a link to understand what is COALESCE function : https://www.w3schools.blog/coalesce-function-oracle

![image.png](./images/0.png)

Please upvote if you like the effort i put into this.