# Concise solution in mssql beat 90%

**Author:** miazhang
**Votes:** 6
**Link:** [https://leetcode.com/problems/weather-type-in-each-country/solutions/598194/](https://leetcode.com/problems/weather-type-in-each-country/solutions/598194/)

---

```
SELECT c.country_name,
       CASE WHEN AVG(w.weather_state*1.0)<=15 THEN 'Cold'
            WHEN AVG(w.weather_state*1.0)>=25 THEN 'Hot'
            ELSE 'Warm' END AS weather_type
FROM Countries c
JOIN Weather w
ON c.country_id = w.country_id
WHERE day LIKE '2019-11%'
GROUP BY c.country_name
           
```