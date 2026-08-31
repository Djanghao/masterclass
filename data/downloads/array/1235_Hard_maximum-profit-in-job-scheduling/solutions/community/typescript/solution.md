# ✅ solved using - JavaScript, Python, TypeScript | clear explanation 👍🔥

**Author:** raviTejaY
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514729/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514729/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem states to make the most out of each job opportunity. The key idea is to sort the jobs based on their end times and then use **Dynamic Programming** approach to find the maximum profit that can be obtained up to each job.
# Approach
<!-- Describe your approach to solving the problem. -->
- Combine individual `startTime`, `endTime`, and `profit` into a single array of jobs, where each job is represented by `[start, end, profit]`. This structuring facilitates simultaneous access to all critical attributes of a job.
- Now sort the jobs based on their end times. This ordering ensures that when we process a job, all conflicts with previous jobs have already been resolved
- Initialize a DP array where `dp[i]` represents the maximum profit is achieved by considering jobs  upto the `i`th position int he sorted array.
- **Conflict check with Binary Search:** For each job in the sorted array, deploy a binary search mechanism to efficiently identify the nearest preceding job that concludes before the current job commences. This approach ensures minimal time complexity in resolving scheduling conflicts.
- **Conditions while updating** `dp[i]`: 
    -   Add the profit of the current job to the maximum profit achievable from the last non-conflicting job.
    - Retain the maximum profit achievable up to the previous job `dp[i-1]`. This comparison ensures that each step considers the most profitale combination of jobs without time overlaps.
-  Retrieve the last element of the DP array `dp[jobs.length-1]`, which represents the end of job scheduling strategy which is the maximum profit achieved.

# Complexity
- Time complexity: $$O(N*logN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Solving the problem involves
1. Sorting the jobs based on their end times which takes ***O(n * log(n))*** time
2. Implementing Binary Search Function
    ***O(log(n))*** - time complexity for each call
    ***O(n * log(n))*** - the worst case scenario of calling binary  search once for each job

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The factors include Jobs Array and DP Array.
*N - Number of Jobs*

# JavaScript
```
var jobScheduling = function(startTime, endTime, profit) {
    // create the jobs array
    let jobs = startTime.map((start, i) => [start, endTime[i], profit[i]]);
    // sort the jobs based on end times
    jobs.sort((a, b) => a[1] - b[1]);

    // create a DP array, where `dp[i]` will hold the maximum profit upto ith job.
    // we initialize the first element with the profit of first job
    let dp = new Array(jobs.length);
    dp[0] = jobs[0][2];

    // iterate over jobs and update DP
    for (let i = 1; i < jobs.length; i++) {
        let inclProf = jobs[i][2];
        let l = binarySearch(jobs, i);
        if (l != -1) {
            inclProf += dp[l];
        }
        dp[i] = Math.max(inclProf, dp[i - 1]);
    }

    return dp[jobs.length - 1];
};

// Binary Search Function
function binarySearch(jobs, index) {
    let start = 0, end = index - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (jobs[mid][1] <= jobs[index][0]) {
            if (jobs[mid + 1][1] <= jobs[index][0]) {
                start = mid + 1;
            } else {
                return mid;
            }
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
```
# Python
```
class Solution(object):
    def jobScheduling(self, startTime, endTime, profit):
        # Define BinarySearch function
        def binarySearch(jobs, start):
            lo, hi = 0, len(jobs) - 1
            while lo <= hi:
                mid = lo + (hi - lo) // 2
                if jobs[mid][0] <= start:
                    lo = mid + 1
                else:
                    hi = mid - 1
            return hi

        # Create jobs array and sort them based on end times
        jobs = sorted(zip(startTime, endTime, profit), key=lambda v: v[1])

        # Initialize DP Array
        dp = [(0, 0)]  # (endTime, profit)

        # Iterate and Update DP
        for start, end, prof in jobs:
            i = binarySearch(dp, start)
            if dp[i][1] + prof > dp[-1][1]:
                dp.append((end, dp[i][1] + prof))

        # return the result
        return dp[-1][1]

        
```
# TypeScript
```
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    // function to perform a binary search in the DP array
    // finds the latest job that does not conflict with the current one
    const binarySearch = (jobs: [number, number][], start: number): number => {
        let lo = 0, hi = jobs.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (jobs[mid][0] <= start) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return hi;
    };

    // Create and sort the jobs based on their end times
    const jobs = startTime.map((start, i) => [start, endTime[i], profit[i]])
        .sort((a, b) => a[1] - b[1]);

    // Initialize the DP array with a dummy job
    const dp: [number, number][] = [[0, 0]];  // Each element is a tuple of (endTime, profit)

    // Iterate through the sorted jobs and update the DP array
    for (const [start, end, prof] of jobs) {
        const i = binarySearch(dp, start);
        const maxProfit = dp[i][1] + prof;
        if (maxProfit > dp[dp.length - 1][1]) {
            dp.push([end, maxProfit]);
        }
    }

    // The result is the profit in the last element of the DP array
    return dp[dp.length - 1][1];
};
```

### Thank you! Please Upvote 
![intro-import.jpg](./images/0.jpeg)
