# PL/SQL - USING REGEXP_COUNT()

**Author:** Arsene_knows
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-tweets-ii/solutions/5659166/](https://leetcode.com/problems/invalid-tweets-ii/solutions/5659166/)

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
/* Write your PL/SQL query statement below */
select  t.tweet_id
from    Tweets t
where   (length(t.content) > 140
         OR REGEXP_COUNT (t.content, '[@]') > 3
         OR REGEXP_COUNT (t.content, '[#]') > 3
        )
order by t.tweet_id asc
```