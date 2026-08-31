# Easy solution using case

**Author:** elefant1805
**Votes:** 1
**Link:** [https://leetcode.com/problems/weather-type-in-each-country/solutions/5112360/](https://leetcode.com/problems/weather-type-in-each-country/solutions/5112360/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT c.country_name, (
    CASE WHEN AVG(w.weather_state) <= 15 THEN 'Cold'
    WHEN AVG(w.weather_state) >= 25 THEN 'Hot'
    ELSE 'Warm' 
    END
) AS weather_type
FROM Countries c
INNER JOIN Weather w
ON c.country_id = w.country_id
WHERE EXTRACT(YEAR FROM w.day) = 2019 AND EXTRACT(MONTH FROM w.day) = 11
GROUP BY c.country_name
```