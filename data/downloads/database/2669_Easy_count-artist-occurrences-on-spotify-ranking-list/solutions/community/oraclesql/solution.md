# Oracle | Count | Group By

**Author:** kunalc_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/5347733/](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/5347733/)

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
select
    artist,
    count(id) as occurrences
from
    spotify
group by
    artist
order by 
    2 desc,1
```