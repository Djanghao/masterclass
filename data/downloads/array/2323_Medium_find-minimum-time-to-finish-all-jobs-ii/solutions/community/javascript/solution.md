# [JavaScript] Sort and split jobs evenly | O(N*logN)

**Author:** kamiournew
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5732178/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/5732178/)

---

# Intuition
We need to evenly split jobs between workers so that each worker spends approximately the same time on the job. This way, we will not have workers that work on some jobs for a really long time and workers that complete their job really fast.

# Approach
Sort jobs and workers from least to largest. This way, a worker that can spend least time will take the easiest job. And a worker that can spend most of time will take the largest job.
Since workers will start working simultaneously, iterate over them and find the one who will be working the most.

# Complexity
- Time complexity: **O(N*logN)** - sorting is dominant here.

- Space complexity: **O(N) or O(N*logN)** - sorting space complexity.

# Code
```javascript []
/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function(jobs, workers) {
    jobs.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);

    let maxDays = 1;

    for (let i = 0; i < jobs.length; i++) {
        maxDays = Math.max(
            maxDays,
            Math.ceil(jobs[i] / workers[i])
        );
    }

    return maxDays;
};

```