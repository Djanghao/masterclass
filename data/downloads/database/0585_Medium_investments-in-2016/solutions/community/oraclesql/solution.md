# Easy Solution

**Author:** I_ManishSharma
**Votes:** 3
**Link:** [https://leetcode.com/problems/investments-in-2016/solutions/4963392/](https://leetcode.com/problems/investments-in-2016/solutions/4963392/)

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
select round(sum(tiv_2016),2) tiv_2016
from Insurance
where tiv_2015 in (select tiv_2015
                   from Insurance
                   group by tiv_2015
                   having count(*) > 1) and (lat,lon) in (select lat, lon
                                                            from Insurance
                                                            group by lat,lon
                                                            having count(*) <= 1);
```