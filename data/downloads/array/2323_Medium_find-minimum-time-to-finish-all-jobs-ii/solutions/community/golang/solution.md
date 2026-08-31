# Beats 100% with Explaination

**Author:** amitbasuri123
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/4595105/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/4595105/)

---

# Intuition
To solve this problem, the main idea is to match jobs to workers in a way that minimizes the total time taken to complete all jobs. Since each worker can complete exactly one job, and each job must be completed by exactly one worker, the strategy is to pair the largest job with the fastest worker, the second largest job with the second fastest worker, and so on. This ensures that the time taken to complete each job is minimized. The total time to complete all jobs is then the maximum time any single job takes to complete.

# Approach
- First, sort both the `jobs` and `workers` arrays in ascending order.
- Iterate through each pair of job and worker.
- For each pair, calculate the days taken to complete the job by that worker. This is done by dividing the job time by the worker's daily capacity. If there's a remainder, that means an additional day is needed.
- Keep track of the maximum number of days required for any job, as this will be the total time taken to complete all jobs.
- After iterating through all pairs, return the maximum number of days recorded.

# Complexity
- Time complexity: $$O(n \\log n)$$
  - Sorting both the `jobs` and `workers` arrays takes $$O(n \\log n)$$ time.
  - The subsequent for loop takes $$O(n)$$ time.
- Space complexity: $$O(1)$$
  - No extra space is used, apart from variables for iteration and calculation.

# Code
```Go []
func minimumTime(jobs []int, workers []int) int {
    sort.Ints(jobs)
    sort.Ints(workers)

    n := len(jobs)
    days := 0
    for i := 0; i < n; i++ {
        d := jobs[i] / workers[i]
        if jobs[i]%workers[i] != 0 {
            d++
        }
        if d > days {
            days = d
        }
    }
    return days
}
```

```python []
def minimum_time(jobs: List[int], workers: List[int]) -> int:
    jobs.sort()
    workers.sort()

    days = 0
    for job, worker in zip(jobs, workers):
        d = -(-job // worker)  # Ceiling division
        days = max(days, d)
    return days
```

```rust []
impl Solution {
    pub fn minimum_time(mut jobs: Vec<i32>, mut workers: Vec<i32>) -> i32 {
        // Sort the vectors
        jobs.sort();
        workers.sort();

        let mut days = 0;
        for (job, worker) in jobs.iter().zip(workers.iter()) {
            // Perform the ceiling division
            let mut d = job / worker;
            if job % worker != 0 {
                d += 1;
            }

            // Update the maximum days
            days = days.max(d);
        }
        days
    }
}

```