# ✅[MySQL] Simple and Clean, beats 88%✅

**Author:** _Tanmay
**Votes:** 786
**Link:** [https://leetcode.com/problems/rising-temperature/solutions/3716884/](https://leetcode.com/problems/rising-temperature/solutions/3716884/)

---

### Please upvote if you find this helpful. \u270C
<img src="https://assets.leetcode.com/users/images/b8e25620-d320-420a-ae09-94c7453bd033_1678818986.7001078.jpeg" alt="Cute Robot - Stable diffusion" width="200"/>


## Intuition

The problem requires us to find all the dates with higher temperatures compared to their previous dates (yesterday). To solve this, we need to compare each date's temperature with the temperature of the previous date.

## Approach

To solve the problem, we can use the following approach:

1. Join the Weather table with itself, denoting the first occurrence as `w1` and the second occurrence as `w2`.
2. Compare the dates of `w1` and `w2` using the `DATEDIFF()` function to check if they are consecutive days (with a difference of 1 day).
3. Add a condition in the WHERE clause to select the rows where the temperature of `w1` is greater than the temperature of `w2`.
4. Select the `id` of `w1` as the result.

The SQL query for the above approach is as follows:

```sql
SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;
