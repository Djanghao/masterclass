# MYSQL : ABS() + SELF JOIN with Explanation. Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 3
**Link:** [https://leetcode.com/problems/rectangles-area/solutions/2456659/](https://leetcode.com/problems/rectangles-area/solutions/2456659/)

---

```
# Write your MySQL query statement below


/**
Why  p1.id < p2.id ??
e.g. (2,3) and (3,2) are the same pair, and we only want one of them. Since these two combinations have the same area, we are asked to order them by p1.id ascending -> p1.id should be smaller than p2.id when there is a tie in area.

*/

SELECT

    P1.id AS p1,
    P2.id AS p2,
    ABS(P1.x_value - P2.x_value)*ABS(P1.y_value - P2.y_value) AS area
    
FROM Points P1
JOIN Points P2
ON P1.id < P2.id
    AND P1.x_value <> P2.x_value 
        AND P1.y_value <> P2.y_value
ORDER BY 3 DESC, 1 ASC, 2 ASC
```