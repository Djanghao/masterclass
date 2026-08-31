# Counting unique values for : group

**Author:** feed0
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/5148185/](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/5148185/)

---

# Intuition
The Q asks us to group metrics for : each unique teacher.

# Approach
Although the situtation is where (sub, dept) is the primary key, we want to (1) GROUP BY teacher, then (2) extract each ones' metrics.

Since we do not bother in which department each teacher teach their lessons, we should simply (2.1) count the `unique subjects` for each `unique teacher` -- which we have already grouped by in step 1.

# Complexity
- Time complexity:
Our two variables here are `teacher - t` and `subject - s`.

The more teachers we have, the more groups we have.
The more distinct subjects, the more `subject keys - sk` and calculations we need.

Since we have one single table the size of both variables conform to the `no_rows - n`.

Hence our time complexity will reach some O(n + sk)
Taken sk as a subset of the subject column, then:

O(n)

- Space complexity:
Apart from the actual table the COUNT(DISTINCT _) queries a subset subjects. The bigger this subset the bigger our space complexity:

O(n + sk)

# Code
```

SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY 1;
```

## Grouping by index
After I decided to use the teacher_id index which is 1, I got a peek of a roughly 10% faster result instead of using the column name.