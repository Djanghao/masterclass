# Reason for 10th test case Failure || Reason for Wrong answer.

**Author:** aryanshridhar
**Votes:** 143
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/1816306/](https://leetcode.com/problems/parallel-courses-iii/solutions/1816306/)

---

So the inital logic that comes to mind is to greedy take all the courses with indegree 0, take the max time from them and keep on adding them to a solution.
However, here's the simple testcase that fails with it - 

<img src='https://assets.leetcode.com/users/images/c2f97b4f-3651-405e-b8d4-507551abe941_1646315711.2128415.jpeg' height=500 width = 700>


According to the naive solution, the result would go something like - 
`max(1,100) + max(10,1) + max(1) = 111`.

However, if the student take the course `1` and `3` together, the student can also **complete course 2 within the same timeframe**.
That's because course `2` only requires `1` as it's prerequisite which we have already completed within the first month.

Basically, the situation would go something like - 

```
t = 0 month -> Started studying the courses 1 and 3. 
t = 1 month -> Completed course 1 and now taking course 2.
t = 11 month -> Completed course 2 as well. Course 3 is still going on.
t = 100 month -> Finally, completed course 3. Registering for course 4 now.
t = 101 month -> Completed course 4. Taking course 5.
t = 102 month -> Completed all courses.
```

That's why we smartly need to maintain an array with each course completion time.

