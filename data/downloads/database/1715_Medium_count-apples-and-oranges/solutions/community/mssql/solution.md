# Easy solution using isnull and left join

**Author:** neudatageek
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-apples-and-oranges/solutions/1082089/](https://leetcode.com/problems/count-apples-and-oranges/solutions/1082089/)

---

```
SELECT Sum(b.apple_count +Isnull(c.apple_count,0)) apple_count,
       Sum(b.orange_count+Isnull(c.orange_count,0)) orange_count 
FROM boxes b 
LEFT JOIN chests c 
       ON b.chest_id = c.chest_id
```