# 2 Ways to write the same query using LEFT JOIN. Easy explanation

**Author:** sukumar-satapathy
**Votes:** 425
**Link:** [https://leetcode.com/problems/combine-two-tables/solutions/2593063/](https://leetcode.com/problems/combine-two-tables/solutions/2593063/)

---

### **Explanation:**
The questuion asks us to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.

LEFT JOIN works here since it exactly does the same. It returns all the records from the 1st table and the corresponding information from the 2nd table. If there's no matching data in the 2nd table, it returns NULL for those fields.

Now the same query can be written in 2 ways. Here they are :

#### **1st way (table1 LEFT JOIN table2 ON condition)**
```
SELECT P.firstName, P.lastName, A.city, A.state
FROM Person P LEFT JOIN Address A
on P.personId = A.personId
```

#### **2nd way (table1 LEFT JOIN table2 USING column_name)**
```
SELECT P.firstName, P.lastName, A.city, A.state
FROM Person P
LEFT JOIN Address A USING (personId)
```

If it helped or you learned a new way, kindly upvote. Thanks :)