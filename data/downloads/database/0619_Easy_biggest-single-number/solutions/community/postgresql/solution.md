# Simpe code

**Author:** Farruxbek_005
**Votes:** 2
**Link:** [https://leetcode.com/problems/biggest-single-number/solutions/5557341/](https://leetcode.com/problems/biggest-single-number/solutions/5557341/)

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
select max(num) as num from (
    select num from MyNumbers group by num having count(num)=1
)
```