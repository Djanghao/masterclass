# Straightforward Solution

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/loan-types/solutions/5102517/](https://leetcode.com/problems/loan-types/solutions/5102517/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT DISTINCT user_id FROM Loans
WHERE loan_type IN ('Refinance', 'Mortgage')
GROUP BY user_id
HAVING COUNT(DISTINCT loan_type) >= 2
ORDER BY user_id
```