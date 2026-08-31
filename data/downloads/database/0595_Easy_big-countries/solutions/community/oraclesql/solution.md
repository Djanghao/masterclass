# SQL | Oracle Union and OR

**Author:** jainshubham766
**Votes:** 12
**Link:** [https://leetcode.com/problems/big-countries/solutions/1967670/](https://leetcode.com/problems/big-countries/solutions/1967670/)

---

```
Is Union is faster than OR?
```

Using UNION is faster in some cases when it comes to cases like scan two different column like this.

(Of course using UNION ALL is much faster than UNION since we don't need to sort the result. But it violates the requirements)

Union not always faster than or!
Most good DBMSs use an internal query optimizer to combine the SELECT statements
before they are even processed. In theory, this means that from a performance
perspective, there should be no real difference between using multiple WHERE clause
conditions or a UNION. I say in theory, because, in practice, most query optimizers
don\u2019t always do as good a job as they should. Your best bet is to test both methods to
see which will work best for you.

```
/* Write your PL/SQL query statement below */
 
        -- Approach 01: Using OR Operator
 SELECT name, population, area
 FROM World
 Where (area >= 3000000 ) OR (population >=25000000);
 
 
            -- Approach 02:  Using UNION Operator --faster than OR
 SELECT name, population, area
 FROM World
 Where (area >= 3000000 ) 
 
 UNION

 SELECT name, population, area
 FROM World
 Where (population >=25000000);
```

