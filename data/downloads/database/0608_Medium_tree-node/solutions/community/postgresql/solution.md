# USING CASE

**Author:** pj_pavon
**Votes:** 6
**Link:** [https://leetcode.com/problems/tree-node/solutions/5052043/](https://leetcode.com/problems/tree-node/solutions/5052043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-- Write your PostgreSQL query statement below

SELECT 
    id,
    CASE WHEN  p_id IS NULL
        THEN
            'Root'
        ELSE
            CASE WHEN id IN (SELECT p_id FROM Tree)
                THEN
                    'Inner'
                ELSE
                    'Leaf'
            END
    END AS type
FROM Tree
```