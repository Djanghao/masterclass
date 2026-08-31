# Simple Solution

**Author:** krex0r
**Votes:** 4
**Link:** [https://leetcode.com/problems/weather-type-in-each-country/solutions/2569218/](https://leetcode.com/problems/weather-type-in-each-country/solutions/2569218/)

---

We select the country name and the average temperature from every countries on a specific month and year.  
The query is the same as this sentence.  
We need to group by country to calculate the temperature.

```sql
SELECT
    country_name,
    CASE
        WHEN AVG(weather_state) <= 15 THEN 'Cold'
        WHEN AVG(weather_state) >= 25 THEN 'Hot'
    ELSE 'Warm' END AS weather_type
FROM Countries
JOIN Weather ON Countries.country_id = Weather.country_id
AND YEAR(day) = '2019' AND MONTH(day) = '11'
GROUP BY country_name
```

For the date, we have many options:
```sql
WHERE YEAR(day) = '2019'
AND MONTH(day) = '11'
```
```sql
WHERE day BBETWEEN '2019-11-01' and '2019-11-30'
```
```sql
WHERE DATE_FORMAT(day, "%M %Y") = "November 2019"
```
```sql
WHERE day LIKE '2019-11%'
```
and more