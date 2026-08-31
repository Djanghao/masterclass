# Python Greedy

**Author:** WangQiuc
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2215525/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2215525/)

---

The heuristic is the optimal arrangement should be sorting jobs and workers and then pairing them in order.
Or for any `(job_i, worker_i)` and `(job_j, worker_j)` that `i < j`, it should be `job_i < job_j` and `worker_i < worker_j`.

Proved by contradiction: 
Assume such arrangement is not optimal that swaping the `ith` worker with the `jth` which `i<j` gives better outcome (fewer time to finish job). That's `max(ji/wi, jj/wj) > max(jj/wi, ji/wj)`. Since `jj/wi >= ji/wj`, the assumption indicates that `max(ji/wi, jj/wj) > jj/wi`. 
But `ji/wi <= jj/wi` and `jj/wj <= jj/wi` so it's a contradiction.

```
def minimumTime(self, jobs, workers):
	return max((j-1)//w+1 for j,w in zip(sorted(jobs),sorted(workers)))
```