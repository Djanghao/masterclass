# Identify Duplicate Emails (Using GROUP BY and HAVING Clause) in PostgreSQL

**Author:** d_sushkov
**Votes:** 11
**Link:** [https://leetcode.com/problems/duplicate-emails/solutions/5550723/](https://leetcode.com/problems/duplicate-emails/solutions/5550723/)

---

# Intuition
Identify emails that appear more than once in the table by grouping the data and counting occurrences.

# Approach
1. Group by email: Group the rows by the email field.
2. Count occurrences: Count the number of rows in each group.
3. Filter duplicates: Select groups where the count is greater than one.

# Complexity
- Time complexity:$$O(nlogk)$$, where $$n$$ is the number of rows and $$k$$ is the number of unique email addresses. 

- Space complexity: $$O(n)$$ temporary storage for intermediate results during sorting and aggregation.
# Code
```
-- Write your PostgreSQL query statement below
SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;
```