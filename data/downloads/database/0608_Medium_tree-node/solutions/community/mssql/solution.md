# ✅ 🔥 MYSQL || ⚡very easy solution uwu

**Author:** maary_
**Votes:** 9
**Link:** [https://leetcode.com/problems/tree-node/solutions/3234528/](https://leetcode.com/problems/tree-node/solutions/3234528/)

---


```
SELECT id, 
    CASE 
        WHEN p_id IS NULL THEN 'Root' 
        WHEN p_id IS NOT NULL AND id IN (SELECT p_id FROM Tree) THEN 'Inner' 
        ELSE 'Leaf' 
    END AS type
FROM Tree
ORDER BY id;
```