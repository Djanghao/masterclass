# Replace, Replace & Replace

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-capitalization/solutions/6080597/](https://leetcode.com/problems/first-letter-capitalization/solutions/6080597/)

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
```mysql []
# Write your MySQL query statement below
SELECT content_id, content_text AS original_text,
REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(CONCAT(UPPER(SUBSTRING(content_text, 1, 1)), LOWER(SUBSTRING(content_text, 2, LENGTH(content_text) - 1))), " z", " Z"), " y", " Y"), " x", " X"), " w", " W"), " v", " V"), " u", " U"), " t", " T"), " s", " S"), " r", " R"), " q", " Q"), " p", " P"), " o", " O"), " n", " N"), " m", " M"), " l", " L"), " k", " K"), " j", " J"), " i", " I"), " h", " H"), " g", " G"), " f", " F"), " e", " E"), " d", " D"), " c", " C"), " b", " B"), " a", " A") AS converted_text FROM user_content

```