# simple query with easy NULL handling using COALESCE

**Author:** utkarshaggarwal74
**Votes:** 632
**Link:** [https://leetcode.com/problems/find-customer-referee/solutions/2398637/](https://leetcode.com/problems/find-customer-referee/solutions/2398637/)

---

SELECT name
FROM Customer
WHERE COALESCE(referee_id,0) <> 2;

here COALESCE  is used to replace NULL values with zero before checking whether it is equal to 2 or not.

if you understand the solution plz do upvote it.