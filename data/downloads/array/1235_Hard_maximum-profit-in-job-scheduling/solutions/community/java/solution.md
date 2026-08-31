# ✅Beats 100% - Binary Search - Explained with [ Video ] - C++/Java/Python/JS

**Author:** lancertech6
**Votes:** 182
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514669/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/4514669/)

---

![Screenshot 2024-01-06 061042.png](./images/0.png)

# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->
\\
https://youtu.be/Vi78k-JOu5s

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1300 Subscribers*
*Current Subscribers: 1216*

---
# Intuition:
The problem is approached using dynamic programming, where we break it down into smaller sub-problems and build a solution incrementally. Sorting the jobs by their end times allows us to process them sequentially, picking the best non-overlapping previous job. Dynamic programming helps decide whether to take or skip each job, updating a DP table for the maximum profit at each step.

# Approach:
The implementation of this problem utilizes a sorted list, binary search, and dynamic programming to calculate the maximum profit for scheduling non-overlapping jobs. Each step of the approach is essential for the efficiency and correctness of the solution:

1. **Sorting Jobs**: First, we pair each job's endTime, startTime, and profit together and sort these pairs based on their endTime. This is done to consider jobs by the order they finish. The sorting is achieved through the sorted function, which sorts the zipped lists of end times, start times, and profits.

    ```
    jobs = sorted(zip(endTime, startTime, profit))
    ```
2. **Dynamic Programming Table (dp)**: We define a DP table dp of size n+1, where n is the number of jobs to store the maximum profit up to each job. We initialize this table with zeros.

    ```
    dp = [0] * (n + 1)
    ```
3. **Binary Search** : For each job, we need to find the closest job that finished before the current job's start. This is where bisect_right from the bisect module is used. It performs a binary search to find the insertion point of the current job\u2019s start time in the sorted jobs array to ensure no overlap.
    ```
    j = bisect_right(jobs, s, hi=i, key=lambda x: x[0])
    ```
    The callback lambda x: x[0] is used to ensure the search operates on the endTime of the jobs. j is the index where the job can be inserted without conflict, so dp[j] corresponds to the maximum profit up to the job that finishes right before the current job can start.

4. **Profit Calculation** : For every job at index i, we perform a calculation to determine the maximum profit including the current job versus excluding it. To include the current job, we take the profit of the current job p and add it to the profit accumulated until the closest non-conflicting job, which is dp[j]. If this sum is greater than the maximum profit without the current job dp[i], we update our dp at i+1 with this larger value; else, we carry over the maximum profit without the current job.
    ```
    dp[i + 1] = max(dp[i], dp[j] + p)
    ```
5. **Result**: After considering all jobs, the maximum profit that can be achieved is stored at the end of the dp array. Therefore, the last entry dp[n] is returned as the final result.
    ```
    return dp[n]
    ```


# Complexity
- Time complexity: The binary search is called N times within the loop, resulting in O(N log N) for all binary search calls. Combining the sorting and binary search complexities, the overall time complexity is `O(N log N)`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The total space complexity of the algorithm is `O(N)`.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int numJobs = profit.length; // Number of jobs
        Job[] jobs = new Job[numJobs];

        for (int i = 0; i < numJobs; ++i) {
            jobs[i] = new Job(endTime[i], startTime[i], profit[i]);
        }

        Arrays.sort(jobs, Comparator.comparingInt(job -> job.endTime));
        int[] dp = new int[numJobs + 1];

        for (int i = 0; i < numJobs; ++i) {
            int endTimeValue = jobs[i].endTime;
            int startTimeValue = jobs[i].startTime;
            int profitValue = jobs[i].profit;

            int latestNonConflictJobIndex = upperBound(jobs, i, startTimeValue);
            dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profitValue);
        }

        return dp[numJobs];
    }

    private int upperBound(Job[] jobs, int endIndex, int targetTime) {
        int low = 0;
        int high = endIndex;

        while (low < high) {
            int mid = (low + high) / 2;
            if (jobs[mid].endTime <= targetTime) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    private static class Job {
        int endTime;
        int startTime;
        int profit;

        public Job(int endTime, int startTime, int profit) {
            this.endTime = endTime;
            this.startTime = startTime;
            this.profit = profit;
        }
    }
}

```
```C++ []
class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int numJobs = profit.size(); // Number of jobs
        vector<tuple<int, int, int>> jobs(numJobs);
      
        for (int i = 0; i < numJobs; ++i) {
            jobs[i] = {endTime[i], startTime[i], profit[i]};
        }
      
        sort(jobs.begin(), jobs.end());
        vector<int> dp(numJobs + 1);
      
        for (int i = 0; i < numJobs; ++i) {
            auto [endTime, startTime, profit] = jobs[i];
          
            int latestNonConflictJobIndex = upper_bound(jobs.begin(), jobs.begin() + i, startTime, [&](int time, const auto& job) -> bool {
                return time < get<0>(job);
            }) - jobs.begin();
          
            dp[i + 1] = max(dp[i], dp[latestNonConflictJobIndex] + profit);
        }
      
        return dp[numJobs];
    }
};
```
```Python3 []
class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        jobs = sorted(zip(endTime, startTime, profit))
      
        number_of_jobs = len(profit)
      
        dp = [0] * (number_of_jobs + 1)
      
        for i, (current_end_time, current_start_time, current_profit) in enumerate(jobs):
            index = bisect_right(jobs, current_start_time, hi=i, key=lambda x: x[0])
            dp[i + 1] = max(dp[i], dp[index] + current_profit)
      
        return dp[number_of_jobs]
```
```JavaScript []
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const numJobs = profit.length; // Number of jobs
    const jobs = new Array(numJobs);

    for (let i = 0; i < numJobs; ++i) {
        jobs[i] = [endTime[i], startTime[i], profit[i]];
    }

    jobs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(numJobs + 1).fill(0);

    for (let i = 0; i < numJobs; ++i) {
        const [endTime, startTime, profit] = jobs[i];

        const latestNonConflictJobIndex = upperBound(jobs, i, startTime);
        dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profit);
    }

    return dp[numJobs];
};

/**
 * @param {number[][]} jobs
 * @param {number} endIndex
 * @param {number} targetTime
 * @return {number}
 */
function upperBound(jobs, endIndex, targetTime) {
    let low = 0;
    let high = endIndex;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][0] <= targetTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
```
![upvote.png](./images/1.png)
