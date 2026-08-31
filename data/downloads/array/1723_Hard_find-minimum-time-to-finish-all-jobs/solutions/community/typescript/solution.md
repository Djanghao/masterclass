# [Typescript] DFS | Time: O(k*2^N) | Space: O(k)

**Author:** rojas
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/4089383/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/4089383/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(k*2^N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript
function minimumTimeRequired(jobs: number[], k: number): number {
    return helper(jobs, [], Infinity, 0, jobs.length, k);
};

function helper(jobs: number[], workers: number[], min: number, max: number, J: number, W: number): number {

    // All workers used 
    // OR min surpassed
    if (W < 0 || max >= min) {
        return min;
    }

    // All jobs used
    if (J <= 0) {
        return max;
    }

    // Get the current job
    const job = jobs[--J];

    // Add job to existing worker
    const N = workers.length;
    for (let j = 0; j < N; ++j) {
        workers[j] += job;
        min = helper(jobs, workers, min, Math.max(max, workers[j]), J, W);
        workers[j] -= job;
    }

    // Add job to new worker
    workers.push(job);
    min = helper(jobs, workers, min, Math.max(max, job), J, W - 1);
    workers.pop();
    
    return min;
}
```