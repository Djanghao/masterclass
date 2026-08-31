# MS SQL and MYSQL

**Author:** siyu14
**Votes:** 5
**Link:** [https://leetcode.com/problems/students-report-by-geography/solutions/1528198/](https://leetcode.com/problems/students-report-by-geography/solutions/1528198/)

---


In case I cannot find this BRILLIANT answer again.

Copy and paste the answer from 
https://leetcode.com/problems/students-report-by-geography/discuss/672308/(_)-MySQL-Solutions%3A-WINDOW-variables-(Follow-up-answer)
#### Question
```
618. Students Report By Geography
Hard
SQL Schema
A U.S graduate school has students from Asia, Europe and America. The students' location information are stored in table student as below.
 

| name   | continent |
|--------|-----------|
| Jack   | America   |
| Pascal | Europe    |
| Xi     | Asia      |
| Jane   | America   |
 

Pivot the continent column in this table so that each name is sorted alphabetically and displayed underneath its corresponding continent. The output headers should be America, Asia and Europe respectively. It is guaranteed that the student number from America is no less than either Asia or Europe.
 

For the sample input, the output is:
 

| America | Asia | Europe |
|---------|------|--------|
| Jack    | Xi   | Pascal |
| Jane    |      |        |
 

Follow-up: If it is unknown which continent has the most students, can you write a query to generate the student report?
```

#### Answer
##### approach1
```SQL
SELECT
        MAX(CASE WHEN continent = 'America' THEN name END )AS America,
        MAX(CASE WHEN continent = 'Asia' THEN name END )AS Asia,
        MAX(CASE WHEN continent = 'Europe' THEN name END )AS Europe  
FROM (SELECT *, ROW_NUMBER()OVER(PARTITION BY continent ORDER BY name) AS row_id FROM student) AS t
GROUP BY row_id
```
##### approach2

```SQL
SELECT MAX(America) AS America, MAX(Asia) as Asia, MAX(Europe) AS Europe
FROM (
	SELECT 
        CASE WHEN continent = 'America' THEN @r1 := @r1 + 1
             WHEN continent = 'Asia'    THEN @r2 := @r2 + 1
             WHEN continent = 'Europe'  THEN @r3 := @r3 + 1 END row_id,
        CASE WHEN continent = 'America' THEN name END America,
        CASE WHEN continent = 'Asia'    THEN name END Asia,
        CASE WHEN continent = 'Europe'  THEN name END Europe
    FROM student, (SELECT @r1 := 0, @r2 := 0, @r3 := 0) tmp
    ORDER BY name) t
GROUP BY row_id;
```
#### Approach3
```SQL
with pivot_student as(
select name, continent, row_number() over(partition by continent order by name) as rnk from student
    )
select America, Asia, Europe from pivot_student
pivot(min(name) for continent in ([America], [Asia], [Europe] )) as my_pvt

```