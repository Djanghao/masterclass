# Easy Fully Explained Solution For Absolute beginners

**Author:** Sarah-2002
**Votes:** 189
**Link:** [https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/3557640/](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/3557640/)

---

# Intuition
**Quite Simple Problem let's get started**

We have a table that has 3 rows(tuples)
We'd like to get the number of unique subjects each teacher teaches in the university.
# LET'S BREAK IT DOWN
unique : straightup think of using distinct 
number : straight think of using COUNT function
We'll also be using Group by, more to that later on just keep reading

# Approach
1- SELECT the teacher_id : We'd like to return each teacher's id alongside with the number of unique subjects(more to that later)
2- As I have mentioned number --> use **COUNT** function 
**But what are we going to count?**
The number of subjects , we then name the variable as required and showed in the output ( cnt)
Let's look at the code
 ```
count(distinct subject_id ) as cnt
```
# **But wait it's missing something...**
If you were to submit , it would probably generate an error and I have mentioned earlier they explicitly specified that we need unique subjects ---> use DISTINCT 
ps: Whenever you see unique in a question immediately think of using distinct 

3- NOW WE USE GROUP BY :
- We usually use group by with an aggregate function like :COUNT, SUM, AVG, MAX or MIN etc..
- What it basically does is that it groups rows sharing the same values in a somehow specified column or columns.
- In our Case we're using ** Group by ** , to group the courses by teacher_id , which means that we will get one row for each unique course.

# A Question you might be asking yourself , after you have just finished reading my explanation :

> I don't see the significance of using count and also group ?

# Let me answer that :

By grouping the results by teacher, we are telling the database to group all the rows that have the same teacher_id together. This way, we can apply the COUNT function to each group separately, which gives us the number of courses made by each teacher.

You've probbably seen my other explanations, they all follow the same creteria.Hope this was Helpful ! Kindly vote if it was :)

# Code
```
# Write your MySQL query statement below
Select  teacher_id ,
count(distinct subject_id ) as cnt from Teacher
group by teacher_id
```