# Beats 100%👌||Easy Approach🔥|| LEFT JOIN🤩|| USING() ✅|| Simple Explanation 👍|| ISNULL() 😉

**Author:** kartikeymish
**Votes:** 10
**Link:** [https://leetcode.com/problems/employee-bonus/solutions/3553746/](https://leetcode.com/problems/employee-bonus/solutions/3553746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using simple fucntions of sql i.e. joins and basic conditions or isnull to solve this quesion easily.

# Approach
<!-- Describe your approach to solving the problem. -->

###### **Approach 1**: Basic 

1. Using `LEFT JOIN` to join both the table on `empId` 
```
SELECT e.name ,b.bonus from
        Employee e LEFT JOIN Bonus b 
            USING(empId)
```
2. We have 2 Conditions i.e. if the `bonus <1000` or `bonus is null`. So we add these conditons. 
```
        where 
            bonus < 1000 or 
            bonus is null ;
```

###### **Approach 2**: ISNULL 

1. Same as above - Using `LEFT JOIN` to join both the table on `empId` 
```
SELECT e.name ,b.bonus from
        Employee e LEFT JOIN Bonus b 
            USING(empId)
```
2. Using `isnull()` as 
    - if the `b.bonus` is not null then get the bonus value and check if `b.bonus < 1000`.
    - if the `b.bonus` is null then we make it 0 just to check then it is less than 1000 to get outcome.
```
    where 
        ifnull(b.bonus, 0) <1000;
```


# Code

###### **Approach 1**: Basic 

```SQL []
SELECT e.name ,b.bonus from
        Employee e LEFT JOIN Bonus b 
            USING(empId)
        where 
            bonus < 1000 or 
            bonus is null ;
```
###### **Approach 2**: ISNULL 

```SQL []
SELECT e.name, b.bonus from
    Employee e left join bonus b 
        USING(empId)
    where 
        ifnull(b.bonus, 0) <1000;
```
