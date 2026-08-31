# GROUP_CONCAT

**Author:** votrubac
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/5945074/](https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/5945074/)

---

**MySQL**
```
SELECT
  state,
  GROUP_CONCAT(city ORDER BY city ASC separator ', ') AS cities,
  SUM(IF(LEFT(city, 1) = LEFT(state, 1), 1, 0)) AS matching_letter_count
FROM cities
GROUP BY 1
HAVING COUNT(city) > 2 AND matching_letter_count > 0
ORDER BY matching_letter_count DESC, state ASC
```