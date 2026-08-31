# Solution fo MySQL, PostgreSQL and MS SQL Server

**Author:** database-helper
**Votes:** 5
**Link:** [https://leetcode.com/problems/combine-two-tables/solutions/5500085/](https://leetcode.com/problems/combine-two-tables/solutions/5500085/)

---

# Solution / Approach

Given that the requirement is to return all rows from the `Person` table even if there are no corresponding row in the `Address` table, the `LEFT OUTER JOIN` (or `LEFT JOIN` for short) will be used to join the `Person` table with the `Address` table with the `Person` table on the left side of the join clause.  The 2 tables will be joined on the `personId` column and here's how the join clause will look like:

```
FROM Person LEFT OUTER JOIN Address
  ON Person.personId = Address.personId
```

The requirement wants the person's `firstName` and `lastName` as well as the person's `city` and `state` if it exists in the `Address` table and return a NULL value to these 2 columns if they don't exist.  Since we are using a `LEFT OUTER JOIN`, the `city` and `state` will automatically return NULL values if an address record does not exist for a person.  Here's how the `SELECT` statement will look like:

```
SELECT Person.firstName, Person.lastName, Address.city, Address.state
```

It is a good practice to include the table name as part of the column name to avoid any ambiguity if you will be joining tables that has a column that exists in both tables.  Putting these 2 together yields the following query:

# Code
```
# Final Query
SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person LEFT OUTER JOIN Address
  ON Person.personId = Address.personId
```