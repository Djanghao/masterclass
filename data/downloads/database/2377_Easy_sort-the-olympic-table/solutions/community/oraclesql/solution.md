# Simple clean -Sort each column

**Author:** srikanthborusu
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-olympic-table/solutions/4363853/](https://leetcode.com/problems/sort-the-olympic-table/solutions/4363853/)

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
select country, gold_medals, silver_medals,bronze_medals 
from Olympic  
order by gold_medals desc , silver_medals desc ,bronze_medals desc , country  asc 
```