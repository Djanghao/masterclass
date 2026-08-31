# Easy and Fastest Oracle Solution

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/weather-type-in-each-country/solutions/5664388/](https://leetcode.com/problems/weather-type-in-each-country/solutions/5664388/)

---

<!-- Please msg if you have any questions for below query-->

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
SELECT DISTINCT country_name, (CASE WHEN SUM(weather_state)/COUNT(*) <= 15 THEN 'Cold' 
                            WHEN SUM(weather_state)/COUNT(*) >= 25 THEN 'Hot' 
                            ELSE 'Warm' END) AS weather_type
FROM Countries C JOIN Weather W
ON C.country_id = W.country_id
WHERE day LIKE '2019-11%'
GROUP BY country_name;
```