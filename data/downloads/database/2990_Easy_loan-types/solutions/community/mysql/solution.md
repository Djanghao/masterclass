# Easy and Fast MySQL Solution 🚀🚀🚀

**Author:** ataturhan
**Votes:** 5
**Link:** [https://leetcode.com/problems/loan-types/solutions/4729103/](https://leetcode.com/problems/loan-types/solutions/4729103/)

---

# Intuition
The problem requires identifying user IDs that have taken out both Refinance and Mortgage loans.

# Approach
We use the GROUP BY clause to group rows with the same user_id together. Then, we use the HAVING clause to filter groups that have both Refinance and Mortgage loans. Finally, we sort the result in ascending order by user_id.

# Complexity
- Time complexity: O(n), where n is the number of rows in the loans table.
- Space complexity: O(1), as we are only using constant extra space.

# Code
```
# Write your MySQL query statement below
select user_id from loans group by user_id having sum(loan_type = "Refinance") > 0 
and sum(loan_type = "Mortgage") > 0 order by 1 asc;
```