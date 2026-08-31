# Ruby: zip and count by the between? method.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/882186/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/882186/)

---

##### Leetcode: 1450. Number of Students Doing Homework at a Given Time.


From two arrays crate array of pairs, count number of pairs where query_time inside an interval described by a pair.

Ruby code:
```Ruby
# Leetcode: 1450. Number of Students Doing Homework at a Given Time.
# https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
# Runtime: 52 ms, faster than 31.67% of Ruby online submissions for Number of Students Doing Homework at a Given Time.
# Memory Usage: 209.9 MB, less than 15.00% of Ruby online submissions for Number of Students Doing Homework at a Given Time.
# @param {Integer[]} start_time
# @param {Integer[]} end_time
# @param {Integer} query_time
# @return {Integer}
def busy_student(start_time, end_time, query_time)
    start_time.zip(end_time).count{|(x,y)| query_time.between?(x,y)}
end
```