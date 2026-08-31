# EASY , SIMPLE SOLUTION

**Author:** Ashy_Ashwin
**Votes:** 10
**Link:** [https://leetcode.com/problems/game-play-analysis-iv/solutions/5170213/](https://leetcode.com/problems/game-play-analysis-iv/solutions/5170213/)

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

select round (count(*)::numeric / (select count (distinct player_id) from activity) , 2) fraction
from activity
where (player_id , event_date) in (
        select player_id , min(event_date) + 1 firstLog 
        from activity 
        group by 1 )


```