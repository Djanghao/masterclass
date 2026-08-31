# MySQL: fast and simple

**Author:** katakana
**Votes:** 108
**Link:** [https://leetcode.com/problems/tree-node/solutions/1991951/](https://leetcode.com/problems/tree-node/solutions/1991951/)

---

Upvote if you like the solution
```
SELECT id,

    CASE 
        WHEN p_id IS NULL THEN 'Root'
        WHEN id IN (SELECT p_id FROM Tree)THEN 'Inner'
        ELSE 'Leaf'
        END AS type
 FROM Tree
		