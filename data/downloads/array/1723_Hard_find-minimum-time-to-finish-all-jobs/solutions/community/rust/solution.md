# Rust | 0 ms Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/6072660/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/6072660/)

---



# Code
```rust []
impl Solution {
    pub fn minimum_time_required(jobs: Vec<i32>, k: i32) -> i32 {
        let mut jobs = jobs;
        jobs.sort_unstable_by(|a, b| b.cmp(a)); // Sort jobs in descending order for optimization
        
        let mut left = *jobs.first().unwrap(); // Minimum possible maximum time is the largest job
        let mut right: i32 = jobs.iter().sum(); // Maximum possible maximum time is the sum of all jobs
        let mut result = right;
        
        while left <= right {
            let mid = (left + right) / 2;
            if Self::can_assign(&jobs, k as usize, mid) {
                result = mid;
                right = mid - 1; // Try for a smaller maximum time
            } else {
                left = mid + 1; // Increase the maximum time
            }
        }
        
        result
    }

    fn can_assign(jobs: &Vec<i32>, k: usize, max_time: i32) -> bool {
        let mut workloads = vec![0; k]; // Track workloads of each worker
        Self::backtrack(jobs, 0, &mut workloads, max_time)
    }

    fn backtrack(jobs: &Vec<i32>, idx: usize, workloads: &mut Vec<i32>, max_time: i32) -> bool {
        if idx == jobs.len() {
            return true; // All jobs have been assigned successfully
        }
        
        for i in 0..workloads.len() {
            if workloads[i] + jobs[idx] <= max_time {
                workloads[i] += jobs[idx];
                if Self::backtrack(jobs, idx + 1, workloads, max_time) {
                    return true;
                }
                workloads[i] -= jobs[idx];
            }
            
            // Prune: If the current worker has no jobs assigned, no need to try other workers
            if workloads[i] == 0 {
                break;
            }
        }
        
        false
    }
}

```