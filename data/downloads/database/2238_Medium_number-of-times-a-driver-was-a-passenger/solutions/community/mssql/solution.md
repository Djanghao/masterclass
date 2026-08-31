# Correlated Subquery

**Author:** Romina_Boltaks
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5740487/](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/solutions/5740487/)

---


SELECT 
    DISTINCT R1.driver_id, (SELECT ISNULL(COUNT(R2.passenger_id),0)     FROM Rides R2 WHERE R1.driver_id = R2.passenger_id ) AS cnt
FROM Rides R1

```